import React from "react";
import cs from "classnames";
import { useToggle } from "../../hooks";
import { Text } from "../../styles";
import * as S from "./MoviePreview.styles";
import { MoviePreviewProps } from "../../types/liteflixTypes";


//TODO IMAGE SHOULD BE A BACKGROUND IMAGE
const BackgroundImage: React.FC<{ movieInfo: MoviePreviewProps['movieInfo'] }> = ({ movieInfo }) => (
  <S.BackgroundImage
    alt={`${movieInfo.title} background image`}
    src={
      movieInfo.isUserMovie
        ? movieInfo.imgUrl
        : `https://image.tmdb.org/t/p/w500/${movieInfo.backdrop_path}`
    }
  />
);

const OverlayContent: React.FC<{ movieInfo: MoviePreviewProps['movieInfo'] }> = ({ movieInfo }) => (
  <>
    <Text $weight="bold" className="title">
      <S.SmallPlayButton />
      {movieInfo.title}
    </Text>
    {!movieInfo.isUserMovie && (
      <>
        <Text $size="14px" className="vote-average">
          <S.StarIcon />
          {movieInfo.vote_average}
        </Text>
        <Text $size="14px" className="release-date">
          {movieInfo.release_date?.slice(0, 4)}
        </Text>
      </>
    )}
  </>
);

export const MoviePreview: React.FC<MoviePreviewProps> = ({ movieInfo }) => {
  const { isOpen, toggleIsOpen } = useToggle();

  return (
    <S.MoviePreview>
      <BackgroundImage movieInfo={movieInfo} />
      <S.BackgroundOverlay className={cs({ open: isOpen })}>
        <S.BigPlayButton />
        <Text className="title">{movieInfo.title}</Text>
      </S.BackgroundOverlay>
      <S.Overlay
        className={cs({ open: isOpen })}
        onMouseEnter={toggleIsOpen}
        onMouseLeave={toggleIsOpen}
      >
        <OverlayContent movieInfo={movieInfo} />
      </S.Overlay>
    </S.MoviePreview>
  );
};