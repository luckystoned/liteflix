import React from "react";
import cs from "classnames";
import { useToggle } from "../../hooks";
import { Text } from "../../styles";
import * as S from "./MoviePreview.styles";
import { MoviesDto } from "../../types/liteflixTypes";


//TODO IMAGE SHOULD BE A BACKGROUND IMAGE
const BackgroundImage: React.FC<{ movie: MoviesDto }> = ({ movie }) => (
  <S.BackgroundImage
    alt={`${movie.title} background image`}
    src={movie.imgUrl}
  />
);

const OverlayContent: React.FC<{ movie: MoviesDto }> = ({ movie }) => (
  <>
    <Text $weight="bold" className="title">
      <S.SmallPlayButton />
      {movie.title}
    </Text>
    {!movie.isUserMovie && (
      <>
        <Text $size="14px" className="vote-average">
          <S.StarIcon />
          {movie.voteAverage}
        </Text>
        <Text $size="14px" className="release-date">
          {movie.releaseDate?.slice(0, 4)}
        </Text>
      </>
    )}
  </>
);

export const MoviePreview: React.FC<{ movie: MoviesDto }> = ({ movie }) => {
  const { isOpen, toggleIsOpen } = useToggle();

  return (
    <S.MoviePreview>
      <BackgroundImage movie={movie} />
      <S.BackgroundOverlay className={cs({ open: isOpen })}>
        <S.BigPlayButton />
        <Text className="title">{movie.title}</Text>
      </S.BackgroundOverlay>
      <S.Overlay
        className={cs({ open: isOpen })}
        onMouseEnter={toggleIsOpen}
        onMouseLeave={toggleIsOpen}
      >
        <OverlayContent movie={movie} />
      </S.Overlay>
    </S.MoviePreview>
  );
};