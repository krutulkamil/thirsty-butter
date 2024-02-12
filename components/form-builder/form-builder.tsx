'use client';

import React from 'react';
import { DndContext } from '@dnd-kit/core';
import type { Form } from '@prisma/client';

import { PreviewDialogButton } from '@/components/buttons/preview-dialog-button';
import { SaveFormButton } from '@/components/buttons/save-form-button';
import { PublishFormButton } from '@/components/buttons/publish-form-button';
import { Designer } from '@/components/form-builder/designer';
import { DragOverlayWrapper } from '@/components/form-builder/drag-overlay-wrapper';

interface FormBuilderProps {
  form: Form;
}

export function FormBuilder({ form }: Readonly<FormBuilderProps>) {
  return (
    <DndContext>
      <main className="flex flex-col w-full">
        <nav className="flex justify-between border-b-2 p-4 gap-3 items-center">
          <h2 className="truncate font-medium">
            <span className="text-muted-foreground mr-2">Form:</span>
            {form.name}
          </h2>
          <div className="flex items-center gap-2">
            <PreviewDialogButton />
            {!form.published && (
              <>
                <SaveFormButton id={form.id} />
                <PublishFormButton id={form.id} />
              </>
            )}
          </div>
        </nav>
        <div className="flex w-full flex-grow items-center justify-center relative overflow-y-auto h-[200px] bg-accent bg-[url(/topography.svg)] dark:bg-[url(/topography-dark.svg)]">
          <Designer />
        </div>
      </main>
      <DragOverlayWrapper />
    </DndContext>
  );
}
