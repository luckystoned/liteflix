import React from "react";
import { useRandomMovie } from "../../hooks";
import * as S from "./MovieInformation.styles";
import { Button, Text } from "../../styles";
import playSvg from "../../assets/img/play.svg";
import plusSvg from "../../assets/img/plus.svg";

export const MovieInformation: React.FC = () => {
  const { currentRandomMovie } = useRandomMovie();

  return (
    <S.MovieInformation>
      <Text>
        Original de <b>liteflix</b>
      </Text>

      <S.Title size="20px">{currentRandomMovie.title}</S.Title>

      <S.ResponsiveHorToVer>
        <Button>
          <img src={playSvg} alt="play icon" />
          Reproducir
        </Button>

        <Button $bordered>
          <img src={plusSvg} alt="plus icon" />
          Mi lista
        </Button>
      </S.ResponsiveHorToVer>
    </S.MovieInformation>
  );
};