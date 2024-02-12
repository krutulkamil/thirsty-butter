'use client';

import React, { useTransition } from 'react';
import { HiSaveAs } from 'react-icons/hi';
import { FaSpinner } from 'react-icons/fa';

import { useDesigner } from '@/components/hooks/use-designer';
import { updateFormContent } from '@/actions/form';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

interface SaveFormButtonProps {
  id: number;
}

export function SaveFormButton({ id }: Readonly<SaveFormButtonProps>) {
  const { elements } = useDesigner();
  const [loading, startTransition] = useTransition();

  const updateForm = async () => {
    try {
      const jsonElements = JSON.stringify(elements);
      await updateFormContent(id, jsonElements);
      toast({
        title: 'Success',
        description: 'Your form has been saved successfully',
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'An error occurred while saving the form',
        variant: 'destructive',
      });
    }
  };

  return (
    <Button
      variant="outline"
      className="gap-2"
      disabled={loading}
      onClick={() => {
        startTransition(updateForm);
      }}
    >
      <HiSaveAs className="h-4 w-4" />
      Save
      {loading && <FaSpinner className="animate-spin" />}
    </Button>
  );
}
