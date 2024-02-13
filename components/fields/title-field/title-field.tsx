'use client';

import { LuHeading1 } from 'react-icons/lu';

import { extraAttributes } from '@/components/fields/title-field/config/attributes';
import { DesignerComponent } from '@/components/fields/title-field/designer-component';
import { PropertiesComponent } from '@/components/fields/title-field/properties-component';
import { FormComponent } from '@/components/fields/title-field/form-component';
import type {
  ElementsType,
  FormElement,
  FormElementInstance,
} from '@/components/form-builder/form-elements';

const type: ElementsType = 'TitleField';

export type CustomInstance = FormElementInstance & {
  extraAttributes: typeof extraAttributes;
};

export const TitleFieldFormElement: FormElement = {
  type,
  construct: (id) => ({ id, type, extraAttributes }),
  designerButtonElement: {
    icon: LuHeading1,
    label: 'Title Field',
  },
  designerComponent: DesignerComponent,
  formComponent: FormComponent,
  propertiesComponent: PropertiesComponent,

  validate: () => true,
};
