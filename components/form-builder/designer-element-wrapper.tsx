'use client';

import React from 'react';

import {
  FormElements,
  type FormElementInstance,
} from '@/components/form-builder/form-elements';

interface DesignerElementWrapperProps {
  element: FormElementInstance;
}

export function DesignerElementWrapper({
  element,
}: Readonly<DesignerElementWrapperProps>) {
  const DesignerElement = FormElements[element.type].designerComponent;

  return <DesignerElement elementInstance={element} />;
}
