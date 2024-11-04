import React from "react";
import { MoviePreview } from "../MoviePreview/MoviePreview";
import { MoviesDto } from "../../types/liteflixTypes";

const MovieList: React.FC<{ movies: MoviesDto[] }> = ({ movies }) => (
  <>
    {movies.map((movie: MoviesDto) => (
      <MoviePreview
        key={movie.id}
        movie={movie}
      />
    ))}
  </>
);

export default MovieList;
