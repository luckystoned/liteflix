import React, { useContext } from "react";
import { MoviesByCategoryContext } from "../../context";
import { MoviePreview } from "../MoviePreview/MoviePreview";
import { Text } from "../../styles";
import * as S from "./MoviesColumn.styles";
import sadFaceSvg from "../../assets/img/sad-face.png";

//TODO REFACTOR
interface Movie {
  _id?: string;
  backdrop_path: string;
  title: string;
  isUserMovie?: boolean;
  imgUrl?: string;
  vote_average?: number;
  release_date?: string;
  [key: string]: any;
}

export const MoviesColumn: React.FC = () => {
  const { movies, isLoading } = useContext(MoviesByCategoryContext);

  const renderSkeleton = () => {
    return [1, 2, 3, 4].map((number) => <S.MovieSkeleton key={number} />);
  };

  const renderSadFace = () => {
    return (
      <>
        <img src={sadFaceSvg} alt="sad face" />
        <Text style={{ textAlign: "center" }}>
          Todavia no agregaste ninguna pelicula
        </Text>
      </>
    );
  };

  const renderMovies = () => {
    return movies.map((movieInfo: Movie) => (
      <MoviePreview
        key={movieInfo._id || movieInfo.backdrop_path}
        movieInfo={movieInfo}
      />
    ));
  };

  return (
    <S.MoviesColumn id="movie-list">
      {isLoading
        ? renderSkeleton()
        : !movies || movies.length === 0
        ? renderSadFace()
        : renderMovies()}
    </S.MoviesColumn>
  );
};