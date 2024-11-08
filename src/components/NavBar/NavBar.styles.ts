import styled from "styled-components"

export const NavBar = styled.nav`
  display: flex;
  justify-content: center;
  position: fixed;
  z-index: 4;
  top: 0;
  left: 0;
  right: 0;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.6),
    rgba(0, 0, 0, 0)
  );
  width: 100%;

  ${(props) => props.theme.animation.topFadeIn}
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: ${(props) => props.theme.container.width};
  max-width: ${(props) => props.theme.container.maxWidth};
  padding: 24px 0;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    padding: 35px 0;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    & > div {
      width: 100%;
    }
  }
`
