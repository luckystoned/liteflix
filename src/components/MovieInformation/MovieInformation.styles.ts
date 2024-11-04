import styled from 'styled-components';

export const MovieInformation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  gap: 16px;
  width: 100%;
  height: 72vh;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    align-items: flex-start;
    height: 100vh;
    padding-bottom: 162px;
  }
`;

export const ResponsiveHorToVer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    flex-direction: row;
    gap: 24px;
  }
`;

export const Title = styled.h2<{ size: string }>`
  color: ${(props) => props.theme.colors.primary};
  font-size: 76px;
  text-align: center;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    font-size: ${(props) => props.size};
    text-align: left;
  }

  ${(props) => props.theme.animation.leftFadeIn};
`;
