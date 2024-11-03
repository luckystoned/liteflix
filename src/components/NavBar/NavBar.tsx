import React from "react";
import { useDevice } from "../../hooks";
import { AddMovieButton, BurgerMenu } from "..";
import { AppLogo, Flex, WithBadge } from "../../styles";
import * as S from "./NavBar.styles";
import bellSvg from "../../assets/img/bell.svg";
import profileImage from "../../assets/img/profile-image.png";

export const NavBar: React.FC = () => {
  const { isMobile } = useDevice();

  return (
    <S.NavBar>
      <S.Container>
        {!isMobile && (
          <Flex $gap="3">
            <AppLogo />
            <AddMovieButton />
          </Flex>
        )}

        <Flex $gap="2">
          <BurgerMenu />

          {!isMobile ? (
            <WithBadge>
              <img src={bellSvg} alt="bell with notification badge" />
            </WithBadge>
          ) : (
            <AppLogo />
          )}

          <img src={profileImage} alt="user profile pic" />
        </Flex>
      </S.Container>
    </S.NavBar>
  );
};