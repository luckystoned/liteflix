import React from "react";
import styled from "styled-components";

export const StyledAppLogo = styled.span`
  color: ${(props) => props.theme.colors.primary};
  font-size: 28px;
  letter-spacing: 4px;

  & > span:nth-child(1) {
    font-weight: bold;
  }

  @media (min-width: 800px) {
    font-size: 34px;
  }
`;

export const AppLogo: React.FC = () => {
  return (
    <StyledAppLogo>
      <span>LITE</span>
      <span>FLIX</span>
    </StyledAppLogo>
  );
};