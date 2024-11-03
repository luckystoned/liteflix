import React, { createContext } from "react";
import { useToggle } from "../hooks";
import { ContextProviderProps, MenuContextType } from "../types/liteflixTypes";

export const MenuContext = createContext<MenuContextType>(
  {} as MenuContextType
);

export const MenuContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
  const { isOpen, toggleIsOpen } = useToggle();

  return (
    <MenuContext.Provider value={{ isOpen, toggleIsOpen }}>
      {children}
    </MenuContext.Provider>
  );
};
