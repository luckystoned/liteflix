import React, { useContext } from "react";
import cs from "classnames";
import { MenuContext } from "../../context";
import { useDevice } from "../../hooks";
import { AddMovieButton, BurgerMenu } from "..";
import { AppLogo, Flex, Text, WithBadge } from "../../styles";
import { menuListItems } from "../../utils";
import * as S from "./Menu.styles";
import bellSvg from "../../assets/img/bell.svg";
import profileImage from "../../assets/img/profile-image.png";

const HeaderContent: React.FC<{ isMobile: boolean }> = ({ isMobile }) => (
  <>
    {!isMobile ? (
      <Flex $gap="2">
        <WithBadge>
          <img src={bellSvg} alt="bell with notification badge" />
        </WithBadge>
        <img src={profileImage} alt="user profile pic" />
      </Flex>
    ) : (
      <>
        <AppLogo />
        <img src={profileImage} alt="user profile pic" />
      </>
    )}
  </>
);

const MenuList: React.FC = () => (
  <S.ListItems>
    {menuListItems.map((list) => (
      <Text key={list} $size="22px">
        {list}
      </Text>
    ))}
  </S.ListItems>
);

export const Menu: React.FC = () => {
  const { isOpen } = useContext(MenuContext);
  const { isMobile } = useDevice();

  return (
    <S.Menu className={cs({ open: isOpen })}>
      <S.Container>
        <S.Header>
          <BurgerMenu />
          <HeaderContent isMobile={isMobile} />
        </S.Header>
        <MenuList />
        <AddMovieButton size="22px" />
        <Text $size="22px">Cerrar Sesión</Text>
      </S.Container>
    </S.Menu>
  );
};