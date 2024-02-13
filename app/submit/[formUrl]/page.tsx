import React from 'react';

import { getFormContentByUrl } from '@/actions/form';
import { FormSubmitComponent } from '@/components/form-builder/form-submit-component';
import type { FormElementInstance } from '@/components/form-builder/form-elements';

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
