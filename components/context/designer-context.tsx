'use client';

import {
  createContext,
  useState,
  useMemo,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from 'react';

import type { FormElementInstance } from '@/components/form-builder/form-elements';

type DesignerContextType = {
  elements: FormElementInstance[];
  setElements: Dispatch<SetStateAction<FormElementInstance[]>>;
  addElement: (index: number, element: FormElementInstance) => void;
  removeElement: (id: string) => void;

  selectedElement: FormElementInstance | null;
  setSelectedElement: Dispatch<SetStateAction<FormElementInstance | null>>;

  updateElement: (id: string, element: FormElementInstance) => void;
};

export const DesignerContext = createContext<DesignerContextType | null>(null);

interface DesignerContextProviderProps {
  children: ReactNode;
}

export function DesignerContextProvider({
  children,
}: Readonly<DesignerContextProviderProps>) {
  const [elements, setElements] = useState<FormElementInstance[]>([]);
  const [selectedElement, setSelectedElement] =
    useState<FormElementInstance | null>(null);

  const addElement = (index: number, element: FormElementInstance) => {
    setElements((prev) => {
      const newElements = [...prev];
      newElements.splice(index, 0, element);
      return newElements;
    });
  };

  const removeElement = (id: string) => {
    setElements((prev) => prev.filter((element) => element.id !== id));
  };

  const updateElement = (id: string, element: FormElementInstance) => {
    setElements((prev) => {
      const newElements = [...prev];
      const index = newElements.findIndex((el) => el.id === id);
      newElements[index] = element;
      return newElements;
    });
  };

  const contextValue = useMemo(
    () => ({
      elements,
      setElements,
      addElement,
      removeElement,
      selectedElement,
      setSelectedElement,
      updateElement,
    }),
    [elements, selectedElement]
  );

  return (
    <DesignerContext.Provider value={contextValue}>
      {children}
    </DesignerContext.Provider>
  );
}
