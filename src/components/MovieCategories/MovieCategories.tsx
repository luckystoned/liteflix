import React from "react";
import { MoviesByCategoryContextProvider } from "../../context";
import { DropDown, MoviesColumn } from "../../components";


import * as S from "./MovieCategories.styles";

export const MovieCategories: React.FC = () => {
  return (
    <S.MovieCategories>
      <MoviesByCategoryContextProvider>
        <S.Header>
          <DropDown />
        </S.Header>
        <MoviesColumn />
      </MoviesByCategoryContextProvider>
    </S.MovieCategories>
  );
};