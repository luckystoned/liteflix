import React, { useContext, useEffect } from "react";
import { MoviesContex } from "../../../context"
import { Text } from "../../../styles/Text";

import * as S from "./LoadingScreen.styles";

export const LoadingScreen: React.FC = () => {
  const { dispatch, nextScreen } = useContext(MoviesContex);

  const handleCancelClick = () => {
    dispatch("dropzone");
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => dispatch(nextScreen), 4000);
    return () => clearTimeout(timeoutId);
  }, [dispatch, nextScreen]);

  return (
    <S.LoadingScreen>
      <Text>Cargando...</Text>

      <S.ProgressBar>
        <S.LinePrimaryColor />
      </S.ProgressBar>

      <Text onClick={handleCancelClick} style={{ cursor: "pointer" }}>
        Cancelar
      </Text>
    </S.LoadingScreen>
  );
};