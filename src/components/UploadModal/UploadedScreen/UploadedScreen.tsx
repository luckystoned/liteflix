import React from "react";
import { Text } from "../../../styles/Text";
import * as S from "./UploadedScreen.styles";

export const UploadedScreen: React.FC = () => {
  return (
    <S.UploadedScreen>
      <Text $weight="bold" $size="24px">
        ¡Felicitaciones!
      </Text>
      <Text $size="20px">Liteflix The Movie fue correctamente subida.</Text>
    </S.UploadedScreen>
  );
};