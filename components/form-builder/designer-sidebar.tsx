import React from 'react';

import { useDesigner } from '@/components/hooks/use-designer';
import { FormElementsSidebar } from '@/components/form-builder/form-elements-sidebar';
import { PropertiesFormSidebar } from '@/components/form-builder/properties-form-sidebar';

export function DesignerSidebar() {
  const { selectedElement } = useDesigner();

  return (
    <aside className="w-[400px] max-w-[400px] flex flex-col flex-grow gap-2 border-l-2 border-muted p-4 bg-background overflow-y-auto h-full">
      {selectedElement ? <PropertiesFormSidebar /> : <FormElementsSidebar />}
    </aside>
  );
}
