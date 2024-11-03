import React from "react";
import { MoviePreview } from "../MoviePreview/MoviePreview";
import { Movie } from "../../types/liteflixTypes";

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

export default MovieList;
