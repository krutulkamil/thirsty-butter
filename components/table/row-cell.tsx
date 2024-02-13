'use client';

import React from 'react';

import { TableCell } from '@/components/ui/table';
import type { ElementsType } from '@/components/form-builder/form-elements';

interface RowCellProps {
  type: ElementsType;
  value: string;
}

export function RowCell({ type, value }: Readonly<RowCellProps>) {
  let node: React.ReactNode = value;

  return <TableCell>{node ?? '-'}</TableCell>;
}
