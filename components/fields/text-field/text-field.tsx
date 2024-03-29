'use client';

import { MdTextFields } from 'react-icons/md';

import { extraAttributes } from '@/components/fields/text-field/config/attributes';
import { DesignerComponent } from '@/components/fields/text-field/designer-component';
import { PropertiesComponent } from '@/components/fields/text-field/properties-component';
import { FormComponent } from '@/components/fields/text-field/form-component';
import type {
  ElementsType,
  FormElement,
  FormElementInstance,
} from '@/components/form-builder/form-elements';

const type: ElementsType = 'TextField';

export type CustomInstance = FormElementInstance & {
  extraAttributes: typeof extraAttributes;
};

export const TextFieldFormElement: FormElement = {
  type,
  construct: (id) => ({ id, type, extraAttributes }),
  designerButtonElement: {
    icon: MdTextFields,
    label: 'Text Field',
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
