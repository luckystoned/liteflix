import React, { useContext } from "react";
import { MoviesContext } from "../../../context"
import { Text } from "../../../styles/Text";
import * as S from "./ErrorScreen.styles";

export const ErrorScreen: React.FC = () => {
  const { dispatch } = useContext(MoviesContext);

  const handleRetryClick = () => {
    dispatch("dropzone");
  };

  return (
    <S.ErrorScreen>
      <Text>¡ERROR! NO SE PUDO CARGAR LA PELÍCULA</Text>
      <S.ProgressBar />
      <Text $weight="bold" onClick={handleRetryClick} style={{ cursor: "pointer" }}>
        REINTENTAR
      </Text>
    </S.ErrorScreen>
  );
};