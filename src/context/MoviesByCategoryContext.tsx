import React, { createContext, ReactNode } from "react";
import { useMoviesCategory, UseMoviesCategoryState } from "../hooks";

// REFACTO AN ADD TYPES
interface MoviesByCategoryContextType extends UseMoviesCategoryState {
  // Añadir aquí los tipos de retorno específicos de useMoviesCategory
  [key: string]: any;
}

export const MoviesByCategoryContext = createContext<MoviesByCategoryContextType>(
  {} as MoviesByCategoryContextType
);

interface MoviesByCategoryContextProviderProps {
  children: ReactNode;
}

export const MoviesByCategoryContextProvider: React.FC<MoviesByCategoryContextProviderProps> = ({ children }) => {
  const values = useMoviesCategory();

  return (
    <MoviesByCategoryContext.Provider value={{ ...values }}>
      {children}
    </MoviesByCategoryContext.Provider>
  );
};
