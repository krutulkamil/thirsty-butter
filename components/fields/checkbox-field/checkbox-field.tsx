'use client';

import { IoMdCheckbox } from 'react-icons/io';

import { extraAttributes } from '@/components/fields/checkbox-field/config/attributes';
import { DesignerComponent } from '@/components/fields/checkbox-field/designer-component';
import { PropertiesComponent } from '@/components/fields/checkbox-field/properties-component';
import { FormComponent } from '@/components/fields/checkbox-field/form-component';
import type {
  ElementsType,
  FormElement,
  FormElementInstance,
} from '@/components/form-builder/form-elements';

const type: ElementsType = 'CheckboxField';

export type CustomInstance = FormElementInstance & {
  extraAttributes: typeof extraAttributes;
};

export const CheckboxFieldFormElement: FormElement = {
  type,
  construct: (id) => ({ id, type, extraAttributes }),
  designerButtonElement: {
    icon: IoMdCheckbox,
    label: 'CheckBox Field',
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
      return currentValue === 'true';
    }

    return true;
  },
};
