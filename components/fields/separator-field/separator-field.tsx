'use client';

import { RiSeparator } from 'react-icons/ri';

import { DesignerComponent } from '@/components/fields/separator-field/designer-component';
import { PropertiesComponent } from '@/components/fields/separator-field/properties-component';
import { FormComponent } from '@/components/fields/separator-field/form-component';
import type {
  ElementsType,
  FormElement,
} from '@/components/form-builder/form-elements';

const type: ElementsType = 'SeparatorField';

export const SeparatorFieldFormElement: FormElement = {
  type,
  construct: (id) => ({ id, type }),
  designerButtonElement: {
    icon: RiSeparator,
    label: 'Separator field',
  },
  designerComponent: DesignerComponent,
  formComponent: FormComponent,
  propertiesComponent: PropertiesComponent,

  validate: () => true,
};
