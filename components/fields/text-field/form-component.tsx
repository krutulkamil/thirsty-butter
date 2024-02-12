import React from 'react';

import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import type { FormElementInstance } from '@/components/form-builder/form-elements';
import type { CustomInstance } from '@/components/fields/text-field/text-field';

interface FormComponentProps {
  elementInstance: FormElementInstance;
}

export function FormComponent({
  elementInstance,
}: Readonly<FormComponentProps>) {
  const element = elementInstance as CustomInstance;
  const { label, required, placeholder, helperText } = element.extraAttributes;

  return (
    <div className="flex flex-col gap-2 w-full">
      <Label>
        {label}
        {required && '*'}
      </Label>
      <Input placeholder={placeholder} />
      {helperText && (
        <p className="text-muted-foreground text-[0.8rem]">{helperText}</p>
      )}
    </div>
  );
}
