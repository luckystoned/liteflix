import React, { createContext, useReducer, ReactNode } from "react";
import { ScreenKey, uploadFileReducer } from "../store";
import { useMovies, UseMoviesDto } from "../hooks";
import { UploadScreensState } from "../types/liteflixTypes";
import { DropZoneScreen } from "../components";

interface MovieContextDto extends UploadScreensState, UseMoviesDto {
  dispatch: React.Dispatch<ScreenKey>;
}

export const MoviesContext = createContext<MovieContextDto>(
  {} as MovieContextDto
);

interface MoviesContextProviderProps {
  children: ReactNode;
}

const initialState: UploadScreensState = {
  screen: "dropzone",
  component: <DropZoneScreen />,
  nextScreen: "loading",
};

export const MoviesContextProvider: React.FC<MoviesContextProviderProps> = ({ children }) => {
  const [{ screen, component, nextScreen }, dispatch] = useReducer(uploadFileReducer, initialState);

  const useMoviesValues: UseMoviesDto = useMovies();

  return (
    <MoviesContext.Provider value={{ screen, component, nextScreen, ...useMoviesValues, dispatch }}>
      {children}
    </MoviesContext.Provider>
  );
};
