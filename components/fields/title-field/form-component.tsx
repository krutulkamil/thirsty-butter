import React from 'react';

import type {
  FormElementInstance,
  SubmitFunctionType,
} from '@/components/form-builder/form-elements';
import type { CustomInstance } from '@/components/fields/title-field/title-field';

interface FormComponentProps {
  elementInstance: FormElementInstance;
  submitValue?: SubmitFunctionType;
}

export function FormComponent({
  elementInstance,
}: Readonly<FormComponentProps>) {
  const element = elementInstance as CustomInstance;

  const { title } = element.extraAttributes;

  return <p className="text-xl">{title}</p>;
}
