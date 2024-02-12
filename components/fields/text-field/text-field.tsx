'use client';

import React from 'react';
import { MdTextFields } from 'react-icons/md';

import {
  ElementsType,
  FormElement,
} from '@/components/form-builder/form-elements';
import { extraAttributes } from '@/components/fields/text-field/config/attributes';

const type: ElementsType = 'TextField';

export const TextFieldFormElement: FormElement = {
  type,
  construct: (id) => ({ id, type, extraAttributes }),
  designerButtonElement: {
    icon: MdTextFields,
    label: 'Text Field',
  },
  designerComponent: () => <div>Designers component</div>,
  formComponent: () => <div>Form component</div>,
  propertiesComponent: () => <div>Properties component</div>,
};
