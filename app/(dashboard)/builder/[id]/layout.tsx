import React from 'react';

interface BuilderLayoutProps {
  children: React.ReactNode;
}

export default function BuilderLayout({
  children,
}: Readonly<BuilderLayoutProps>) {
  return <div className="flex w-full flex-grow mx-auto">{children}</div>;
}
