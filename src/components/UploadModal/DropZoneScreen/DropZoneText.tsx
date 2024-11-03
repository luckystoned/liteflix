import React from "react";
import { DropZoneTextProps } from "../../../types/liteflixTypes";
import { Text } from "../../../styles/Text";

const DropZoneText: React.FC<DropZoneTextProps> = ({ isDragActive, movieFile, isMobile }) => {
  if (movieFile) return <Text>Pelicula seleccionada!</Text>;

  return isDragActive ? (
    <Text>Suelta tu archivo aquí</Text>
  ) : (
    <Text>
      Agregá un archivo {!isMobile && " o arrastralo y soltalo aquí"}
    </Text>
  );
};

export default DropZoneText;
