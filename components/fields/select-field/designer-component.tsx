import React from 'react';

import { Label } from '@/components/ui/label';
import { Select, SelectTrigger, SelectValue } from '@/components/ui/select';
import type { FormElementInstance } from '@/components/form-builder/form-elements';
import type { CustomInstance } from '@/components/fields/select-field/select-field';

interface DesignerComponentProps {
  elementInstance: FormElementInstance;
}

export function DesignerComponent({
  elementInstance,
}: Readonly<DesignerComponentProps>) {
  const element = elementInstance as CustomInstance;
  const { label, required, placeholder, helperText } = element.extraAttributes;

  return (
    <div className="flex flex-col gap-2 w-full">
      <Label>
        {label}
        {required && '*'}
      </Label>
      <Select>
        <SelectTrigger className="w-full">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
      </Select>
      {helperText && (
        <p className="text-muted-foreground text-[0.8rem]">{helperText}</p>
      )}
    </div>
  );
}
