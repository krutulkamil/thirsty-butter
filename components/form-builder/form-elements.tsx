import React from 'react';

import { TextFieldFormElement } from '@/components/fields/text-field/text-field';
import { TitleFieldFormElement } from '@/components/fields/title-field/title-field';
import { SubTitleFieldFormElement } from '@/components/fields/sub-title-field/sub-title-field';
import { ParagraphFieldFormElement } from '@/components/fields/paragraph-field/paragraph-field';
import { SeparatorFieldFormElement } from '@/components/fields/separator-field/separator-field';
import { SpacerFieldFormElement } from '@/components/fields/spacer-field/spacer-field';
import { NumberFieldFormElement } from '@/components/fields/number-field/number-field';
import { TextAreaFormElement } from '@/components/fields/text-area-field/text-area-field';
import { DateFieldFormElement } from '@/components/fields/date-field/date-field';
import { SelectFieldFormElement } from '@/components/fields/select-field/select-field';
import { CheckboxFieldFormElement } from '@/components/fields/checkbox-field/checkbox-field';

export type ElementsType =
  | 'TextField'
  | 'TitleField'
  | 'SubTitleField'
  | 'ParagraphField'
  | 'SeparatorField'
  | 'SpacerField'
  | 'NumberField'
  | 'TextAreaField'
  | 'DateField'
  | 'SelectField'
  | 'CheckboxField';

export type SubmitFunctionType = (key: string, value: string) => void;

export type FormElement = {
  type: ElementsType;

  construct: (id: string) => FormElementInstance;

  designerButtonElement: {
    icon: React.ElementType;
    label: string;
  };

  designerComponent: React.FC<{ elementInstance: FormElementInstance }>;
  formComponent: React.FC<{
    elementInstance: FormElementInstance;
    submitValue?: SubmitFunctionType;
    isInvalid?: boolean;
    defaultValue?: string;
  }>;
  propertiesComponent: React.FC<{ elementInstance: FormElementInstance }>;

  validate: (formElement: FormElementInstance, currentValue: string) => boolean;
};

export type FormElementInstance = {
  id: string;
  type: ElementsType;
  // TODO: create type union of all possible extra attributes
  extraAttributes?: Record<string, any>;
};

type FormElementsType = {
  [key in ElementsType]: FormElement;
};

export const FormElements: FormElementsType = {
  // FORM COMPONENTS
  TextField: TextFieldFormElement,
  NumberField: NumberFieldFormElement,
  TextAreaField: TextAreaFormElement,
  DateField: DateFieldFormElement,
  SelectField: SelectFieldFormElement,
  CheckboxField: CheckboxFieldFormElement,
  // LAYOUT COMPONENTS
  TitleField: TitleFieldFormElement,
  SubTitleField: SubTitleFieldFormElement,
  ParagraphField: ParagraphFieldFormElement,
  SeparatorField: SeparatorFieldFormElement,
  SpacerField: SpacerFieldFormElement,
};
