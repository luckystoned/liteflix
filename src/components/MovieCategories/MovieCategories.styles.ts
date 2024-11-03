import styled from "styled-components"

export const MovieCategories = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 25px;
  width: 90%;
  height: 100%;
  margin: 0 auto;
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    flex-shrink: 0;
    justify-content: center;
    width: 220px;
    margin-top: 80px;
  }

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding-top: 65px;
  }
`

export const Header = styled.h4`
  width: 100%;
`

export const Column = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 25px;

  position: relative;
  width: 100%;

  @media (min-width: 480px) {
    gap: 20px;
  }
`
