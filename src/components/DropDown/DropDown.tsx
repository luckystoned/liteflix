import React, { useContext } from "react";
import cs from "classnames";
import { MoviesContext } from "../../context";
import { useToggle } from "../../hooks";
import { Text } from "../../styles";
import * as S from "./DropDown.styles";
import arrowDownSvg from "../../assets/img/down-arrow.svg";
import { Category, CategoryKey } from "../../types/liteflixTypes";


export const DropDown: React.FC = () => {
  const { currentCategory, availableMovieCategories, changeToCategory } = useContext(MoviesContext);
  const { isOpen, toggleIsOpen } = useToggle();

  const handleDropDownClick = () => {
    const movieList = document.querySelector("#movie-list") as HTMLElement | null;
    if (movieList) movieList.style.zIndex = isOpen ? "2" : "1";

    const dropdownModal = document.querySelector("#dropdown-modal") as HTMLElement | null;
    if (dropdownModal) dropdownModal.style.zIndex = isOpen ? "1" : "2";

    toggleIsOpen();
  };

  const handleCategoryItemClick = (tag: CategoryKey) => {
    changeToCategory(tag);
    handleDropDownClick();
  };

  const renderCategoryList = () => {
    return (Object.values(availableMovieCategories) as Category[]).map((category: Category) => (
      <li onClick={() => handleCategoryItemClick(category.tag)} key={category.tag}>
        <Text $weight={category.tag === currentCategory.tag ? "bold" : "normal"} $size="16px">
          {category.title}
        </Text>
      </li>
    ));
  };

  return (
    <S.DropDown>
      <Text $size="18px">Ver:</Text>

      <div onClick={handleDropDownClick}>
        <Text $size="18px" $weight="bold">
          {currentCategory.title}
        </Text>

        <S.ArrowIcon src={arrowDownSvg} alt="Dropdown icon" className={cs({ open: isOpen })} />
      </div>

      <S.DropDownModal id="dropdown-modal" className={cs({ open: isOpen })}>
        {renderCategoryList()}
      </S.DropDownModal>
    </S.DropDown>
  );
};