import React, { useContext } from "react";
import { MoviesContext } from "../../../context";
import { useDevice, useDropZoneLogic } from "../../../hooks";
import * as S from "./DropZoneScreen.styles";
import clipSvg from "../../../assets/img/clip.svg";
import DropZoneText from "./DropZoneText";

export const DropZoneScreen: React.FC = () => {
  const { isMobile } = useDevice();
  const { movieFile, setMovieFile } = useContext(MoviesContext);
  const { getRootProps, getInputProps, isDragActive } = useDropZoneLogic(setMovieFile);

  return (
    <S.DropZoneScreen {...getRootProps()}>
      <input {...getInputProps()} />
      <img src={clipSvg} alt="clip icon" />
      <DropZoneText isDragActive={isDragActive} movieFile={movieFile} isMobile={isMobile} />
    </S.DropZoneScreen>
  );
};