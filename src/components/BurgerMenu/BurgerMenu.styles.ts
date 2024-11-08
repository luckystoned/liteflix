import styled from 'styled-components';

export const BurgerMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  aspect-ratio: 27/12;
  width: 27px;
  height: auto;
  cursor: pointer;

  // Modal open animation
  &.open {
    & > div:nth-child(1) {
      transform: rotate(45deg) translate(10%, 0);
    }

    & > div:nth-child(2) {
      transform: rotate(-45deg) translate(10%, -1px);
    }

    & > div:nth-child(3) {
      opacity: 0;
    }
  }

  // Hover animation
  &:hover > div:nth-child(3) {
    width: 100%;
  }
  & > div:nth-child(3) {
    width: 62%;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    align-items: flex-end;
  }
`;

export const WhiteLine = styled.div`
  background-color: ${({ theme }) => theme.colors.light};
  width: 100%;
  height: 1px;
  transition: 0.2s linear 0s;
`;
