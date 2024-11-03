import styled from 'styled-components';

export const ErrorScreen = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 16px;
  width: 90%;

  & > span:nth-child(3) {
    align-self: flex-end;
    cursor: pointer;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    width: 600px;
  }
`;

export const ProgressBar = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.colors.error};
  width: 100%;
  height: 10px;
`;
