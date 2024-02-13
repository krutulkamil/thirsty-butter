import React, { useState, useEffect } from 'react';

import { Label } from '@/components/ui/label';
import type {
  FormElementInstance,
  SubmitFunctionType,
} from '@/components/form-builder/form-elements';
import {
  CheckboxFieldFormElement,
  type CustomInstance,
} from '@/components/fields/checkbox-field/checkbox-field';
import { cn } from '@/lib/utils';
import { Checkbox } from '@/components/ui/checkbox';

interface FormComponentProps {
  elementInstance: FormElementInstance;
  submitValue?: SubmitFunctionType;
  isInvalid?: boolean;
  defaultValue?: string;
}

export function FormComponent({
  elementInstance,
  submitValue,
  isInvalid = false,
  defaultValue = '',
}: Readonly<FormComponentProps>) {
  const element = elementInstance as CustomInstance;
  const { label, required, helperText } = element.extraAttributes;
  const id = `checkbox-${element.id}`;

  const [value, setValue] = useState<boolean>(defaultValue === 'true');
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(isInvalid === true);
  }, [isInvalid]);

  return (
    <div className="flex items-top space-x-2">
      <Checkbox
        id={id}
        checked={value}
        className={cn(error && 'border-red-500')}
        onCheckedChange={(checked) => {
          let value = false;
          if (checked === true) value = true;

          setValue(value);
          if (!submitValue) return;
          const stringValue = value ? 'true' : 'false';
          const valid = CheckboxFieldFormElement.validate(element, stringValue);
          setError(!valid);
          submitValue(element.id, stringValue);
        }}
      />
      <div className="grid gap-1.5 leading-none">
        <Label htmlFor={id} className={cn(error && 'text-red-500')}>
          {label}
          {required && '*'}
        </Label>
        {helperText && (
          <p
            className={cn(
              'text-muted-foreground text-[0.8rem]',
              error && 'text-red-500'
            )}
          >
            {helperText}
          </p>
        )}
      </div>
    </div>
  );
}
