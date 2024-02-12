import React from 'react';

import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import type { FormElementInstance } from '@/components/form-builder/form-elements';
import type { CustomInstance } from '@/components/fields/text-field/text-field';

interface DesignerComponentProps {
  elementInstance: FormElementInstance;
}

export function DesignerComponent({
  elementInstance,
}: Readonly<DesignerComponentProps>) {
  const element = elementInstance as CustomInstance;
  const { label, required, placeHolder, helperText } = element.extraAttributes;

  return (
    <div className="flex flex-col gap-2 w-full">
      <Label>
        {label}
        {required && '*'}
      </Label>
      <Input readOnly disabled placeholder={placeHolder} />
      {helperText && (
        <p className="text-muted-foreground text-[0.8rem]">{helperText}</p>
      )}
    </div>
  );
}
