'use client';

import React from 'react';
import { format } from 'date-fns';

import { TableCell } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import type { ElementsType } from '@/components/form-builder/form-elements';

interface RowCellProps {
  type: ElementsType;
  value: string;
}

export function RowCell({ type, value }: Readonly<RowCellProps>) {
  let node: React.ReactNode = value;

  switch (type) {
    case 'DateField':
      if (!value) break;

      node = (
        <Badge variant="outline">{format(new Date(value), 'dd/MM/yyyy')}</Badge>
      );
      break;
    case 'CheckboxField':
      node = <Checkbox checked={value === 'true'} disabled />;
      break;
  }

  return <TableCell>{node ?? '-'}</TableCell>;
}
