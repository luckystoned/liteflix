import React, { createContext, useReducer, useState, ReactNode } from "react";
import liteflixGwApi from "../data/liteflixGwApi";
import apiCloudinary from "../data/apiCloudinary";
import { uploadFileReducer } from "../store";
import { useToggle } from "../hooks";
import { DropZoneScreen } from "../components";


interface UploadScreensState {
  screen: string;
  component: JSX.Element;
  nextScreen: string;
}

interface UploadScreensContextType extends UploadScreensState {
  movieTitle: string;
  movieFile: File;
  isUploaded: boolean;
  isOpen: boolean;
  uploadMovie: () => Promise<void>;
  dispatch: React.Dispatch<any>;
  setMovieTitle: React.Dispatch<React.SetStateAction<string>>;
  setMovieFile: React.Dispatch<React.SetStateAction<File>>;
  setIsUploaded: React.Dispatch<React.SetStateAction<boolean>>;
  toggleIsOpen: () => void;
}

const initialState: UploadScreensState = {
  screen: "dropzone",
  component: <DropZoneScreen />,
  nextScreen: "loading",
};

export const MoviesContex = createContext<UploadScreensContextType>(
  {} as UploadScreensContextType
);

interface MoviesContextProviderProps {
  children: ReactNode;
}

export const MoviesContextProvider: React.FC<MoviesContextProviderProps> = ({ children }) => {
  const [{ screen, component, nextScreen }, dispatch] = useReducer(uploadFileReducer, initialState);
  const [movieTitle, setMovieTitle] = useState<string>("");
  const [movieFile, setMovieFile] = useState<File>(
    new File([""], "default", { type: "image/png" })
  );
  const [isUploaded, setIsUploaded] = useState<boolean>(false);
  const { isOpen, toggleIsOpen } = useToggle();

  //TODO pasar a custom hook
  const uploadToCloudinary = async (file: File): Promise<string | null> => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "liteflix-preset");

    try {
      const response = await apiCloudinary.post("/upload", formData);
      return response.data.secure_url;
    } catch (error) {
      console.error("Error subiendo la imagen a Cloudinary:", error);
      return null;
    }
  };

  //TODO MOVE TO LITEFLIX GW API
  const uploadMovie = async () => {
    if (movieFile) {
      const fileUrl = await uploadToCloudinary(movieFile); // Usa movieFile directamente
  
      if (fileUrl) {
        try {
          const response = await liteflixGwApi.post("/movie", {
            title: movieTitle,
            imgUrl: fileUrl,
            //TODO REMOVE GENRE
            tmdbGenreId: 28,
          });
          console.log("Película guardada en la base de datos:", response.data);
          setIsUploaded(true);
        } catch (error) {
          console.error("Error guardando la película en la base de datos:", error);
        }
      } else {
        console.log("Error: No se pudo subir la imagen a Cloudinary");
      }
    }
  };

  return (
    <MoviesContex.Provider
      value={{
        screen,
        component,
        nextScreen,
        movieTitle,
        movieFile,
        isUploaded,
        isOpen,
        uploadMovie,
        dispatch,
        setMovieTitle,
        setMovieFile,
        setIsUploaded,
        toggleIsOpen,
      }}
    >
      {children}
    </MoviesContex.Provider>
  );
};
