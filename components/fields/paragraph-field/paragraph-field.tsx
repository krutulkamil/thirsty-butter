'use client';

import { BsTextParagraph } from 'react-icons/bs';

import { extraAttributes } from '@/components/fields/paragraph-field/config/attributes';
import { DesignerComponent } from '@/components/fields/paragraph-field/designer-component';
import { PropertiesComponent } from '@/components/fields/paragraph-field/properties-component';
import { FormComponent } from '@/components/fields/paragraph-field/form-component';
import type {
  ElementsType,
  FormElement,
  FormElementInstance,
} from '@/components/form-builder/form-elements';

const type: ElementsType = 'ParagraphField';

export type CustomInstance = FormElementInstance & {
  extraAttributes: typeof extraAttributes;
};

export const ParagraphFieldFormElement: FormElement = {
  type,
  construct: (id) => ({ id, type, extraAttributes }),
  designerButtonElement: {
    icon: BsTextParagraph,
    label: 'Paragraph Field',
  },
  designerComponent: DesignerComponent,
  formComponent: FormComponent,
  propertiesComponent: PropertiesComponent,

  validate: () => true,
};
