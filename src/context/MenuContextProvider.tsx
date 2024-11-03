import React, { createContext, ReactNode } from "react";
import { useToggle } from "../hooks";


interface MenuContextType {
  isOpen: boolean;
  toggleIsOpen: () => void;
}

export const MenuContext = createContext<MenuContextType>(
  {} as MenuContextType
);

interface MenuContextProviderProps {
  children: ReactNode;
}

export const MenuContextProvider: React.FC<MenuContextProviderProps> = ({ children }) => {
  const { isOpen, toggleIsOpen } = useToggle();

  return (
    <MenuContext.Provider value={{ isOpen, toggleIsOpen }}>
      {children}
    </MenuContext.Provider>
  );
};
