'use client';

import { LuHeading2 } from 'react-icons/lu';

import { extraAttributes } from '@/components/fields/sub-title-field/config/attributes';
import { DesignerComponent } from '@/components/fields/sub-title-field/designer-component';
import { PropertiesComponent } from '@/components/fields/sub-title-field/properties-component';
import { FormComponent } from '@/components/fields/sub-title-field/form-component';
import type {
  ElementsType,
  FormElement,
  FormElementInstance,
} from '@/components/form-builder/form-elements';

const type: ElementsType = 'SubTitleField';

export type CustomInstance = FormElementInstance & {
  extraAttributes: typeof extraAttributes;
};

export const SubTitleFieldFormElement: FormElement = {
  type,
  construct: (id) => ({ id, type, extraAttributes }),
  designerButtonElement: {
    icon: LuHeading2,
    label: 'SubTitle Field',
  },
  designerComponent: DesignerComponent,
  formComponent: FormComponent,
  propertiesComponent: PropertiesComponent,

  validate: () => true,
};
