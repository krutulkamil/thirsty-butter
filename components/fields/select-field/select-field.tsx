'use client';

import { RxDropdownMenu } from 'react-icons/rx';

import { extraAttributes } from '@/components/fields/select-field/config/attributes';
import { DesignerComponent } from '@/components/fields/select-field/designer-component';
import { PropertiesComponent } from '@/components/fields/select-field/properties-component';
import { FormComponent } from '@/components/fields/select-field/form-component';
import type {
  ElementsType,
  FormElement,
  FormElementInstance,
} from '@/components/form-builder/form-elements';

const type: ElementsType = 'SelectField';

export type CustomInstance = FormElementInstance & {
  extraAttributes: typeof extraAttributes;
};

export const SelectFieldFormElement: FormElement = {
  type,
  construct: (id) => ({ id, type, extraAttributes }),
  designerButtonElement: {
    icon: RxDropdownMenu,
    label: 'Select Field',
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
