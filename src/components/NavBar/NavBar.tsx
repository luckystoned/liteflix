import React from "react";
import { useDevice } from "../../hooks";
import { AddMovieButton, BurgerMenu } from "..";
import { AppLogo, Flex, WithBadge } from "../../styles";
import * as S from "./NavBar.styles";
import bellSvg from "../../assets/img/bell.svg";
import profileImage from "../../assets/img/profile-image.png";

const NotificationBell: React.FC = () => (
  <WithBadge>
    <img src={bellSvg} alt="bell with notification badge" />
  </WithBadge>
);

const UserProfile: React.FC = () => (
  <img src={profileImage} alt="user profile pic" />
);

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
          {isMobile ? <AppLogo /> : <NotificationBell />}
          <UserProfile />
        </Flex>
      </S.Container>
    </S.NavBar>
  );
};
