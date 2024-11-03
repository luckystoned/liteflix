import React from "react";
import * as S from "./MoviesColumn.styles";

const MovieSkeletons: React.FC = () => (
  <>
    {[1, 2, 3, 4].map((number) => (
      <S.MovieSkeleton key={number} />
    ))}
  </>
);

export default MovieSkeletons;
