import React, { useState } from 'react';
import { DragOverlay, useDndMonitor, type Active } from '@dnd-kit/core';

import { SidebarButtonElementDragOverlay } from '@/components/form-builder/sidebar-button-element-drag-overlay';
import {
  FormElements,
  type ElementsType,
} from '@/components/form-builder/form-elements';

export function DragOverlayWrapper() {
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

  return <DragOverlay>{node}</DragOverlay>;
}
