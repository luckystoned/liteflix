import React, { createContext, ReactNode } from "react";
import { useMoviesCategory, UseMoviesCategoryState } from "../hooks";

interface MoviesByCategoryContextType extends UseMoviesCategoryState {
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
