import React from "react";
import { Text } from "../../../styles/Text";
import * as S from "./LoadedScreen.styles";

export const LoadedScreen: React.FC = () => {
  return (
    <S.LoadedScreen>
      <Text>100% CARGADO</Text>
      <S.ProgressBar />
      <S.DoneText>¡LISTO!</S.DoneText>
    </S.LoadedScreen>
  );
};