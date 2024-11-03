import React from "react";
import { MoviesContextProvider } from "../../context";
import { DropDown, MoviesColumn } from "../../components";
import * as S from "./MovieCategories.styles";

export const MovieCategories: React.FC = () => {
  return (
    <S.MovieCategories>
      <MoviesContextProvider>
        <S.Header>
          <DropDown />
        </S.Header>
        <MoviesColumn />
      </MoviesContextProvider>
    </S.MovieCategories>
  );
};