'use client';

import React, { useState, useEffect } from 'react';

import { Button } from '@/components/ui/button';

interface VisitButtonProps {
  shareUrl: string;
}

export function VisitButton({ shareUrl }: Readonly<VisitButtonProps>) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const shareLink = `${window.location.origin}/submit/${shareUrl}`;

  return (
    <Button
      className="w-[200px]"
      onClick={() => {
        window.open(shareLink, '_blank');
      }}
    >
      Visit
    </Button>
  );
}
