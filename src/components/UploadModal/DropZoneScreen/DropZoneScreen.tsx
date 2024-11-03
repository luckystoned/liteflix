import React, { useCallback, useContext } from "react";
import { useDropzone, DropzoneOptions } from "react-dropzone";
import { MoviesContext } from "../../../context";
import { useDevice } from "../../../hooks";
import { Text } from "../../../styles/Text";
import * as S from "./DropZoneScreen.styles";
import clipSvg from "../../../assets/img/clip.svg";

export const DropZoneScreen: React.FC = () => {
  const { isMobile } = useDevice();
  const { movieFile, setMovieFile } = useContext(MoviesContext);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      setMovieFile(acceptedFiles[0]);
    }
  }, [setMovieFile]);

  const dropzoneOptions: DropzoneOptions = {
    onDrop,
    maxFiles: 1,
    accept: {
      "image/png": [".png"],
      "image/jpeg": [".jpg", ".jpeg"],
      "image/svg+xml": [".svg"],
    },
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone(dropzoneOptions);

  const renderDropZoneText = () => {
    if (movieFile) return <Text>Pelicula seleccionada!</Text>;

    return isDragActive ? (
      <Text>Suelta tu archivo aquí</Text>
    ) : (
      <Text>
        Agregá un archivo {!isMobile && " o arrastralo y soltalo aquí"}
      </Text>
    );
  };

  return (
    <S.DropZoneScreen {...getRootProps()}>
      <input {...getInputProps()} />
      <img src={clipSvg} alt="clip icon" />
      {renderDropZoneText()}
    </S.DropZoneScreen>
  );
};