import React from 'react';

import { Logo } from '@/components/layout/logo';
import { ThemeSwitcher } from '@/components/layout/theme-switcher';

interface SubmitLayoutProps {
  children: React.ReactNode;
}

export default function SubmitLayout({
  children,
}: Readonly<SubmitLayoutProps>) {
  return (
    <div className="flex flex-col min-h-screen min-w-full bg-background max-h-screen">
      <nav className="flex justify-between items-center border-b border-border h-[60px] px-4 py-2">
        <Logo />
        <ThemeSwitcher />
      </nav>
      <main className="flex w-full flex-grow">{children}</main>
    </div>
  );
}
