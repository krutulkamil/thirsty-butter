import React from 'react';

import type {
  FormElementInstance,
  SubmitFunctionType,
} from '@/components/form-builder/form-elements';
import type { CustomInstance } from '@/components/fields/sub-title-field/sub-title-field';

interface FormComponentProps {
  elementInstance: FormElementInstance;
  submitValue?: SubmitFunctionType;
}

export function FormComponent({
  elementInstance,
}: Readonly<FormComponentProps>) {
  const element = elementInstance as CustomInstance;

  const { title } = element.extraAttributes;

  return <p className="text-lg">{title}</p>;
}
