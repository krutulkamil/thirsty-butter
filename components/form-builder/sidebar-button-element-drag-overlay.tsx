import React from 'react';

import { FormElement } from '@/components/form-builder/form-elements';
import { Button } from '@/components/ui/button';

interface SidebarButtonElementDragOverlayProps {
  formElement: FormElement;
}

export function SidebarButtonElementDragOverlay({
  formElement,
}: Readonly<SidebarButtonElementDragOverlayProps>) {
  const { label, icon: Icon } = formElement.designerButtonElement;

  return (
    <Button
      variant="outline"
      className="flex flex-col gap-2 h-[120px] w-[120px] cursor-grab"
    >
      <Icon className="h-8 w-8 text-primary cursor-grab" />
      <p className="text-xs">{label}</p>
    </Button>
  );
}
