import React, { useState } from 'react';
import { DragOverlay, useDndMonitor, type Active } from '@dnd-kit/core';

import { SidebarButtonElementDragOverlay } from '@/components/form-builder/sidebar-button-element-drag-overlay';
import {
  FormElements,
  type ElementsType,
} from '@/components/form-builder/form-elements';
import { useDesigner } from '@/components/hooks/use-designer';

export function DragOverlayWrapper() {
  const { elements } = useDesigner();
  const [draggedItem, setDraggedItem] = useState<Active | null>(null);

  useDndMonitor({
    onDragStart: (event) => {
      setDraggedItem(event.active);
    },
    onDragCancel: () => {
      setDraggedItem(null);
    },
    onDragEnd: () => {
      setDraggedItem(null);
    },
  });

  if (!draggedItem) return null;

  let node = <div>No drag overlay</div>;
  const isSidebarButtonElement =
    draggedItem.data.current?.isDesignerButtonElement;

  if (isSidebarButtonElement) {
    const type: ElementsType = draggedItem.data.current?.type;
    node = <SidebarButtonElementDragOverlay formElement={FormElements[type]} />;
  }

  const isDesignerElement = draggedItem.data.current?.isDesignerElement;
  if (isDesignerElement) {
    const elementId = draggedItem.data.current?.elementId;
    const element = elements.find((element) => element.id === elementId);
    if (!element) node = <div>Element not found</div>;
    else {
      const DesignerElementComponent =
        FormElements[element.type].designerComponent;

      node = (
        <div className="flex bg-accent border rounded-md h-[120px] w-full py-2 px-4 opacity-80 pointer pointer-events-none">
          <DesignerElementComponent elementInstance={element} />
        </div>
      );
    }
  }

  return <DragOverlay>{node}</DragOverlay>;
}
