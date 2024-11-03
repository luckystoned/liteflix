import React, { useContext } from "react";
import { MoviesContext } from "../../context";
import { MoviePreview } from "../MoviePreview/MoviePreview";
import { Text } from "../../styles";
import * as S from "./MoviesColumn.styles";
import { Movie } from "../../types/liteflixTypes";

const NoMovies: React.FC = () => (
  <Text style={{ textAlign: "center" }}>
    Todavia no agregaste ninguna pelicula
  </Text>
);

const MovieSkeletons: React.FC = () => (
  <>
    {[1, 2, 3, 4].map((number) => (
      <S.MovieSkeleton key={number} />
    ))}
  </>
);

const MovieList: React.FC<{ movies: Movie[] }> = ({ movies }) => (
  <>
    {movies.map((movieInfo: Movie) => (
      <MoviePreview
        key={movieInfo._id || movieInfo.backdrop_path}
        movieInfo={movieInfo}
      />
    ))}
  </>
);

export const MoviesColumn: React.FC = () => {
  const { movies, isLoading } = useContext(MoviesContext);

  return (
    <S.MoviesColumn id="movie-list">
      {isLoading ? (
        <MovieSkeletons />
      ) : !movies || movies.length === 0 ? (
        <NoMovies />
      ) : (
        <MovieList movies={movies} />
      )}
    </S.MoviesColumn>
  );
};