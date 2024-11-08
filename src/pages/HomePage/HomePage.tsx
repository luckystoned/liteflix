import React from "react";
import { MovieInformation, MovieCategories, UploadModal } from "../../components";
import { useDevice } from "../../hooks";
import * as S from "./HomePage.styles";

const HomePage: React.FC = () => {
  const { isMobile } = useDevice();

  return (
    <S.HomePage>
      <S.MovieBackground id="movie-background" />
      <S.DarkerBackround />

      <S.Container>
        <MovieInformation />
        {!isMobile && <MovieCategories />}
      </S.Container>

      {isMobile && <MovieCategories />}

      <UploadModal />
    </S.HomePage>
  );
};

export default HomePage;