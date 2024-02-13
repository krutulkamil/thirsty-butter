import React from 'react';

import type {
  FormElementInstance,
  SubmitFunctionType,
} from '@/components/form-builder/form-elements';
import type { CustomInstance } from '@/components/fields/paragraph-field/paragraph-field';

interface FormComponentProps {
  elementInstance: FormElementInstance;
  submitValue?: SubmitFunctionType;
}

export function FormComponent({
  elementInstance,
}: Readonly<FormComponentProps>) {
  const element = elementInstance as CustomInstance;

  const { text } = element.extraAttributes;

  return <p className="text-muted-foreground">{text}</p>;
}
