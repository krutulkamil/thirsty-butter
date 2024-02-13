'use client';

import { Bs123 } from 'react-icons/bs';

import { extraAttributes } from '@/components/fields/number-field/config/attributes';
import { DesignerComponent } from '@/components/fields/number-field/designer-component';
import { PropertiesComponent } from '@/components/fields/number-field/properties-component';
import { FormComponent } from '@/components/fields/number-field/form-component';
import type {
  ElementsType,
  FormElement,
  FormElementInstance,
} from '@/components/form-builder/form-elements';

const type: ElementsType = 'NumberField';

export type CustomInstance = FormElementInstance & {
  extraAttributes: typeof extraAttributes;
};

export const NumberFieldFormElement: FormElement = {
  type,
  construct: (id) => ({ id, type, extraAttributes }),
  designerButtonElement: {
    icon: Bs123,
    label: 'Number Field',
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
