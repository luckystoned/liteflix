import React, { useContext, useEffect } from "react";
import { MoviesContext } from "../../../context"
import { ScreenKey } from "../../../types/liteflixTypes";
import { Text } from "../../../styles/Text";
import * as S from "./LoadingScreen.styles";


export const LoadingScreen: React.FC = () => {
  const { dispatch, nextScreen } = useContext(MoviesContext);

  const handleCancelClick = () => {
    dispatch("dropzone");
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => dispatch(nextScreen as ScreenKey), 4000);
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