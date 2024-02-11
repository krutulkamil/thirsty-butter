'use client';

import React from 'react';
import { HiSaveAs } from 'react-icons/hi';

import { Button } from '@/components/ui/button';

interface SaveFormButtonProps {
  id: number;
}

export function SaveFormButton({ id }: Readonly<SaveFormButtonProps>) {
  return (
    <Button variant="outline" className="gap-2">
      <HiSaveAs className="h-4 w-4" />
      Save
    </Button>
  );
}
