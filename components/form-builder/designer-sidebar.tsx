import React from 'react';

import { FormElements } from '@/components/form-builder/form-elements';
import { SidebarButtonElement } from '@/components/form-builder/sidebar-button-element';

export function DesignerSidebar() {
  return (
    <aside className="w-[400px] max-w-[400px] flex flex-col flex-grow gap-2 border-l-2 border-muted p-4 bg-background overflow-y-auto h-full">
      Elements
      <SidebarButtonElement formElement={FormElements.TextField} />
    </aside>
  );
}
