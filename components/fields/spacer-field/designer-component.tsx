import React from 'react';
import { LuSeparatorHorizontal } from 'react-icons/lu';

import { Label } from '@/components/ui/label';
import type { FormElementInstance } from '@/components/form-builder/form-elements';
import type { CustomInstance } from '@/components/fields/spacer-field/spacer-field';

interface DesignerComponentProps {
  elementInstance: FormElementInstance;
}

export function DesignerComponent({
  elementInstance,
}: Readonly<DesignerComponentProps>) {
  const element = elementInstance as CustomInstance;
  const { height } = element.extraAttributes;

  return (
    <div className="flex flex-col gap-2 w-full items-center">
      <Label className="text-muted-foreground">Spacer field: {height}px</Label>
      <LuSeparatorHorizontal className="h-8 w-8" />
    </div>
  );
}
