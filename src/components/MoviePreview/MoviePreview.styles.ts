import styled from 'styled-components';

export const MoviePreview = styled.div`
  border-radius: ${(props) => props.theme.borderRadius.small};
  overflow: hidden;
  position: relative;
  aspect-ratio: 327/172;
  width: 100%;
  height: auto;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    height: 145px;
    flex-shrink: 0;
  }
`;

export const BackgroundImage = styled.img`
  object-fit: cover;
  object-position: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const BackgroundOverlay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  background-image: linear-gradient(to bottom, transparent 20%, black);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 50px 15px 0 15px;
  transition: 0.2s ease 0s;
  opacity: 1;
  &.open {
    opacity: 0;
  }
  & > span {
    text-align: center;
  }
`;

export const Overlay = styled.div`
  background-image: linear-gradient(to bottom, rgba(36, 36, 36, 0.7), rgba(36, 36, 36, 0.7));
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: 0.5s ease 0s;
  cursor: pointer;
  opacity: 0;
  &.open {
    opacity: 1;

    & > .title {
      bottom: 60px;
    }

    & > .vote-average,
    & > .release-date {
      bottom: 24px;
      opacity: 1;
    }
  }

  & > * {
    position: absolute;
    transition: 0.25s ease 0s;
  }

  & > .title {
    display: flex;
    align-items: center;
    gap: 12px;

    left: 0;
    bottom: 70px;

    width: 100%;
    padding: 0 3ch;
    text-align: center;
  }

  & > .vote-average,
  & > .release-date {
    bottom: 34px;
    opacity: 0;
  }

  & > .vote-average {
    display: flex;
    gap: 6px;

    left: 24px;
  }

  & > .release-date {
    right: 24px;
  }
`;

const PlayButton = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.colors.transparent};
  border-radius: 50%;
  border: 1px solid white;
  aspect-ratio: 1/1;
  height: auto;

  &::after {
    content: '';
    position: absolute;

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${(props) => props.theme.colors.light};
    clip-path: polygon(100% 50%, 0 0, 0 100%);
  }
`;

export const BigPlayButton = styled(PlayButton)`
  width: 40px;

  &::after {
    width: 10px;
    height: 14px;
  }
`;

export const SmallPlayButton = styled(PlayButton)`
  width: 27px;
  flex-shrink: 0;

  &::after {
    width: 7px;
    height: 9px;
  }

  &:hover::after {
    background-color: ${(props) => props.theme.colors.dark};
    border-color: ${(props) => props.theme.colors.dark};
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
    border-color: ${(props) => props.theme.colors.dark};
  }
`;

export const StarIcon = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
  aspect-ratio: 1/1;
  width: 12px;
  height: auto;
`;
