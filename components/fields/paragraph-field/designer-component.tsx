import React from 'react';

import { Label } from '@/components/ui/label';
import type { FormElementInstance } from '@/components/form-builder/form-elements';
import type { CustomInstance } from '@/components/fields/paragraph-field/paragraph-field';

interface DesignerComponentProps {
  elementInstance: FormElementInstance;
}

export function DesignerComponent({
  elementInstance,
}: Readonly<DesignerComponentProps>) {
  const element = elementInstance as CustomInstance;
  const { text } = element.extraAttributes;

  return (
    <div className="flex flex-col gap-2 w-full">
      <Label className="text-muted-foreground">Paragraph field</Label>
      <p className="truncate">{text}</p>
    </div>
  );
}
