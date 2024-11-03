import React, { createContext, useReducer } from "react";
import { uploadFileReducer } from "../store";
import { useMovies } from "../hooks";
import { MovieContextDto, ContextProviderProps, UploadScreensState, UseMoviesDto } from "../types/liteflixTypes";
import { DropZoneScreen } from "../components";
import { initialState } from "../utils/utils";


const contextInitialState: UploadScreensState = initialState(<DropZoneScreen />);

export const MoviesContext = createContext<MovieContextDto>(
  {} as MovieContextDto
);

export const MoviesContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
  const [{ screen, component, nextScreen }, dispatch] = useReducer(uploadFileReducer, contextInitialState);

  const useMoviesValues: UseMoviesDto = useMovies();

  return (
    <MoviesContext.Provider value={{ screen, component, nextScreen, ...useMoviesValues, dispatch }}>
      {children}
    </MoviesContext.Provider>
  );
};
