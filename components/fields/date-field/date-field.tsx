'use client';

import { BsFillCalendarDateFill } from 'react-icons/bs';

import { extraAttributes } from '@/components/fields/date-field/config/attributes';
import { DesignerComponent } from '@/components/fields/date-field/designer-component';
import { PropertiesComponent } from '@/components/fields/date-field/properties-component';
import { FormComponent } from '@/components/fields/date-field/form-component';
import type {
  ElementsType,
  FormElement,
  FormElementInstance,
} from '@/components/form-builder/form-elements';

const type: ElementsType = 'DateField';

export type CustomInstance = FormElementInstance & {
  extraAttributes: typeof extraAttributes;
};

export const DateFieldFormElement: FormElement = {
  type,
  construct: (id) => ({ id, type, extraAttributes }),
  designerButtonElement: {
    icon: BsFillCalendarDateFill,
    label: 'Date Field',
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
