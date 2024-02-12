'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

interface FormDetailsErrorProps {
  error: Error;
}

export default function FormDetailsError({
  error,
}: Readonly<FormDetailsErrorProps>) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex w-full h-full flex-col items-center justify-center gap-4">
      <h2 className="text-destructive text-4xl">Something went wrong!</h2>
      <Button asChild>
        <Link href="/">Go back to home</Link>
      </Button>
    </div>
  );
}
