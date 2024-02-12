import React from 'react';

interface FormDetailsLayoutProps {
  children: React.ReactNode;
}

export default function FormDetailsLayout({ children }: Readonly<FormDetailsLayoutProps>) {
  return <div className="flex w-full flex-col flex-grow mx-auto">{children}</div>;
}
