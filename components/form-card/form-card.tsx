import React from 'react';
import Link from 'next/link';
import { formatDistance } from 'date-fns';
import { LuView } from 'react-icons/lu';
import { FaEdit, FaWpforms } from 'react-icons/fa';
import { BiRightArrowAlt } from 'react-icons/bi';
import type { Form } from '@prisma/client';

import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
  CardContent,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface FormCardProps {
  form: Form;
}

export function FormCard({ form }: Readonly<FormCardProps>) {
  const isPublished = form.published;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 justify-between">
          <span className="truncate font-bold">{form.name}</span>
          {isPublished && <Badge>Published</Badge>}
          {!isPublished && <Badge variant="destructive">Draft</Badge>}
        </CardTitle>
        <CardDescription>
          {formatDistance(form.createdAt, new Date(), { addSuffix: true })}
          {isPublished && (
            <span className="flex items-center gap-2">
              <LuView className="text-muted-foreground" />
              <span>{form.visits.toLocaleString()}</span>
              <FaWpforms className="text-muted-foreground" />
              <span>{form.submissions.toLocaleString()}</span>
            </span>
          )}
        </CardDescription>
      </CardHeader>
      <CardContent className="h-[20px] truncate text-sm text-muted-foreground">
        {form.description ?? 'No description'}
      </CardContent>
      <CardFooter>
        {isPublished && (
          <Button asChild className="w-full mt-2 text-md gap-4">
            <Link href={`/forms/${form.id}`}>
              View submissions <BiRightArrowAlt />
            </Link>
          </Button>
        )}
        {!isPublished && (
          <Button
            asChild
            variant="secondary"
            className="w-full mt-2 text-md gap-4"
          >
            <Link href={`/builder/${form.id}`}>
              Edit form <FaEdit />
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
