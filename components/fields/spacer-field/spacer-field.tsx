'use client';

import { LuSeparatorHorizontal } from 'react-icons/lu';

import { extraAttributes } from '@/components/fields/spacer-field/config/attributes';
import { DesignerComponent } from '@/components/fields/spacer-field/designer-component';
import { PropertiesComponent } from '@/components/fields/spacer-field/properties-component';
import { FormComponent } from '@/components/fields/spacer-field/form-component';
import type {
  ElementsType,
  FormElement,
  FormElementInstance,
} from '@/components/form-builder/form-elements';

const type: ElementsType = 'SpacerField';

export type CustomInstance = FormElementInstance & {
  extraAttributes: typeof extraAttributes;
};

export const SpacerFieldFormElement: FormElement = {
  type,
  construct: (id) => ({ id, type, extraAttributes }),
  designerButtonElement: {
    icon: LuSeparatorHorizontal,
    label: 'Spacer field',
  },
  designerComponent: DesignerComponent,
  formComponent: FormComponent,
  propertiesComponent: PropertiesComponent,

  validate: () => true,
};
