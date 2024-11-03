import React from "react";
import cs from "classnames";
import { Category, CategoryKey } from "../../types/liteflixTypes";
import { useDropDown } from "../../hooks";
import { Text } from "../../styles";
import * as S from "./DropDown.styles";
import arrowDownSvg from "../../assets/img/down-arrow.svg";



const CategoryList: React.FC<{ categories: Category[], currentCategory: Category, onCategoryClick: (tag: CategoryKey) => void }> = ({ categories, currentCategory, onCategoryClick }) => (
  <ul>
    {categories.map((category) => (
      <li onClick={() => onCategoryClick(category.tag)} key={category.tag}>
        <Text $weight={category.tag === currentCategory.tag ? "bold" : "normal"} $size="16px">
          {category.title}
        </Text>
      </li>
    ))}
  </ul>
);

export const DropDown: React.FC = () => {
  const { currentCategory, availableMovieCategories, isOpen, handleDropDownClick, handleCategoryItemClick } = useDropDown();

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
        <CategoryList
          categories={Object.values(availableMovieCategories) as Category[]}
          currentCategory={currentCategory}
          onCategoryClick={handleCategoryItemClick}
        />
      </S.DropDownModal>
    </S.DropDown>
  );
};