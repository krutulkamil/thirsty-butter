import React from 'react';

import type { FormElementInstance } from '@/components/form-builder/form-elements';
import { getFormContentByUrl } from '@/actions/form';

interface SubmitPageProps {
  params: {
    formUrl: string;
  };
}

export default async function SubmitPage({
  params,
}: Readonly<SubmitPageProps>) {
  const form = await getFormContentByUrl(params.formUrl);

  if (!form) {
    throw new Error('Form not found');
  }

  const formContent: FormElementInstance[] = JSON.parse(form.content);

  return <FormSubmitComponent formUrl={params.formUrl} content={formContent} />;
}
