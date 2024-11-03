import React, { useContext } from "react";
import { MoviesContext } from "../../context";
import MovieSkeletons from "./MovieSkeletons";
import NoMovies from "./NoMovies";
import MovieList from "./MovieList";
import * as S from "./MoviesColumn.styles";

export const MoviesColumn: React.FC = () => {
  const { movies, isLoading } = useContext(MoviesContext);

  if (isLoading) {
    return <MovieSkeletons />;
  }

  return (
    <S.MoviesColumn>
      {movies.length === 0 ? <NoMovies /> : <MovieList movies={movies} />}
    </S.MoviesColumn>
  );
};