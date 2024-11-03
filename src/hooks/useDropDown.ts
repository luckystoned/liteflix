import { useContext } from "react";
import { MoviesContext } from "../context";
import { useToggle } from "./useToggle";
import { CategoryKey, UseDropDownDto } from "../types/liteflixTypes";


export const useDropDown = (): UseDropDownDto => {
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

  return {
    currentCategory,
    availableMovieCategories,
    isOpen,
    handleDropDownClick,
    handleCategoryItemClick,
  };
};