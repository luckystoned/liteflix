import React from "react";
import { useRandomMovie } from "../../hooks";
import { Button, Text } from "../../styles";
import playSvg from "../../assets/img/play.svg";
import plusSvg from "../../assets/img/plus.svg";
import * as S from "./MovieInformation.styles";

const ActionButton: React.FC<React.PropsWithChildren<{ icon: string; alt: string; bordered?: boolean }>> = ({ icon, alt, children, bordered }) => (
  <Button $bordered={bordered}>
    <img src={icon} alt={alt} />
    {children}
  </Button>
);

export const MovieInformation: React.FC = () => {
  const { currentRandomMovie } = useRandomMovie();
  const { title } = currentRandomMovie;

  return (
    <S.MovieInformation>
      <Text>
        Original de <b>liteflix</b>
      </Text>

      <S.Title size="20px">{title}</S.Title>

      <S.ResponsiveHorToVer>
        <ActionButton icon={playSvg} alt="play icon">
          Reproducir
        </ActionButton>

        <ActionButton icon={plusSvg} alt="plus icon" bordered>
          Mi lista
        </ActionButton>
      </S.ResponsiveHorToVer>
    </S.MovieInformation>
  );
};