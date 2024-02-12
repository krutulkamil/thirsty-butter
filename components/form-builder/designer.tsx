'use client';

import React from 'react';
import { useDndMonitor, useDroppable } from '@dnd-kit/core';

import { DesignerSidebar } from '@/components/form-builder/designer-sidebar';
import { useDesigner } from '@/components/hooks/use-designer';
import { cn } from '@/lib/utils';
import {
  FormElements,
  type ElementsType,
} from '@/components/form-builder/form-elements';
import { idGenerator } from '@/lib/idGenerator';
import { DesignerElementWrapper } from '@/components/form-builder/designer-element-wrapper';

export function Designer() {
  const { elements, addElement, selectedElement, setSelectedElement } =
    useDesigner();

  const droppable = useDroppable({
    id: 'designer-drop-area',
    data: {
      isDesignerDropArea: true,
    },
  });

  useDndMonitor({
    onDragEnd: (event) => {
      const { active, over } = event;
      if (!active || !over) return;

      const isDesignerButtonElement =
        active.data.current?.isDesignerButtonElement;

      if (isDesignerButtonElement) {
        const type: ElementsType = active.data.current?.type;
        const newElement = FormElements[type].construct(idGenerator());

        addElement(0, newElement);
      }
    },
  });

  return (
    <div className="flex w-full h-full">
      <div
        className="p-4 w-full"
        onClick={() => {
          if (selectedElement) setSelectedElement(null);
        }}
      >
        <div
          ref={droppable.setNodeRef}
          className={cn(
            'bg-background max-w-[920px] h-full m-auto rounded-xl flex flex-col flex-grow items-center justify-start flex-1 overflow-y-auto',
            droppable.isOver && 'ring-4 ring-primary ring-inset'
          )}
        >
          {!droppable.isOver && elements.length === 0 && (
            <p className="text-3xl text-muted-foreground flex flex-grow items-center font-bold">
              Drop here
            </p>
          )}
          {droppable.isOver && elements.length === 0 && (
            <div className="p-4 w-full">
              <div className="h-[120px] rounded-md bg-primary/20" />
            </div>
          )}
          {elements.length > 0 && (
            <div className="flex flex-col w-full gap-2 p-4">
              {elements.map((element) => (
                <DesignerElementWrapper key={element.id} element={element} />
              ))}
            </div>
          )}
        </div>
      </div>
      <DesignerSidebar />
    </div>
  );
}
