import React from 'react';

interface FormLayoutProps {
  children: React.ReactNode;
}

export default function FormLayout({ children }: Readonly<FormLayoutProps>) {
  return <div className="flex w-full flex-grow mx-auto">{children}</div>;
}
