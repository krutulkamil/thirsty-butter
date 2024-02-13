import React from 'react';

import type {
  FormElementInstance,
  SubmitFunctionType,
} from '@/components/form-builder/form-elements';
import type { CustomInstance } from '@/components/fields/spacer-field/spacer-field';

interface FormComponentProps {
  elementInstance: FormElementInstance;
  submitValue?: SubmitFunctionType;
}

export function FormComponent({
  elementInstance,
}: Readonly<FormComponentProps>) {
  const element = elementInstance as CustomInstance;

  const { height } = element.extraAttributes;

  return <div style={{ height, width: '100%' }}></div>;
}
