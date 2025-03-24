'use server';

import { currentUser } from '@clerk/nextjs';

import { prisma } from '@/lib/prisma';
import { formSchema, type FormSchemaType } from '@/schemas/form';

class UserNotFoundError extends Error {}

export async function getFormStats() {
  const user = await currentUser();

  if (!user) {
    throw new UserNotFoundError();
  }

  const stats = await prisma.form.aggregate({
    where: {
      userId: user.id,
    },
    _sum: {
      visits: true,
      submissions: true,
    },
  });

  const visits = stats._sum.visits ?? 0;
  const submissions = stats._sum.submissions ?? 0;

  const submissionRate = visits > 0 ? (submissions / visits) * 100 : 0;
  const bounceRate = 100 - submissionRate;

  return {
    visits,
    submissions,
    submissionRate,
    bounceRate,
  };
}

export async function createForm(data: FormSchemaType) {
  const validation = formSchema.safeParse(data);

  if (!validation.success) {
    throw new Error('Form not valid');
  }

  const user = await currentUser();

  if (!user) {
    throw new UserNotFoundError();
  }

  const { name, description } = data;

  const form = await prisma.form.create({
    data: {
      name,
      description,
      userId: user.id,
    },
  });

  if (!form) {
    throw new Error('Something went wrong... Form not created.');
  }

  return form.id;
}

export async function getForms() {
  const user = await currentUser();

  if (!user) {
    throw new UserNotFoundError();
  }

  return prisma.form.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
}

export async function getFormById(id: number) {
  const user = await currentUser();

  if (!user) {
    throw new UserNotFoundError();
  }

  return prisma.form.findUnique({
    where: {
      userId: user.id,
      id,
    },
  });
}

export async function updateFormContent(id: number, jsonContent: string) {
  const user = await currentUser();

  if (!user) {
    throw new UserNotFoundError();
  }

  return prisma.form.update({
    where: {
      userId: user.id,
      id,
    },
    data: {
      content: jsonContent,
    },
  });
}

export async function publishFormContent(id: number) {
  const user = await currentUser();

  if (!user) {
    throw new UserNotFoundError();
  }

  return prisma.form.update({
    where: {
      userId: user.id,
      id,
    },
    data: {
      published: true,
    },
  });
}

export async function getFormContentByUrl(formUrl: string) {
  return prisma.form.update({
    select: {
      content: true,
    },
    data: {
      visits: {
        increment: 1,
      },
    },
    where: {
      shareURL: formUrl,
    },
  });
}

export async function submitFormContent(formUrl: string, content: string) {
  return prisma.form.update({
    where: {
      shareURL: formUrl,
      published: true,
    },
    data: {
      submissions: {
        increment: 1,
      },
      formSubmissions: {
        create: {
          content,
        },
      },
    },
  });
}

export async function getFormWithSubmissions(id: number) {
  const user = await currentUser();

  if (!user) {
    throw new UserNotFoundError();
  }

  return prisma.form.findUnique({
    where: {
      userId: user.id,
      id,
    },
    include: {
      formSubmissions: true,
    },
  });
}
