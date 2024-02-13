'use client';

import { BsTextareaResize } from 'react-icons/bs';

import { extraAttributes } from '@/components/fields/text-area-field/config/attributes';
import { DesignerComponent } from '@/components/fields/text-area-field/designer-component';
import { PropertiesComponent } from '@/components/fields/text-area-field/properties-component';
import { FormComponent } from '@/components/fields/text-area-field/form-component';
import type {
  ElementsType,
  FormElement,
  FormElementInstance,
} from '@/components/form-builder/form-elements';

const type: ElementsType = 'TextAreaField';

export type CustomInstance = FormElementInstance & {
  extraAttributes: typeof extraAttributes;
};

export const TextAreaFormElement: FormElement = {
  type,
  construct: (id) => ({ id, type, extraAttributes }),
  designerButtonElement: {
    icon: BsTextareaResize,
    label: 'TextArea Field',
  },
  designerComponent: DesignerComponent,
  formComponent: FormComponent,
  propertiesComponent: PropertiesComponent,

  validate: (
    formElement: FormElementInstance,
    currentValue: string
  ): boolean => {
    const element = formElement as CustomInstance;
    if (element.extraAttributes.required) {
      return currentValue.length > 0;
    }

    return true;
  },
};
