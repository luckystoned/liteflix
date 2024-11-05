import { useContext } from "react";
import { MoviesContext } from "../context";
import { useToggle } from "./useToggle";
import { CategoryKey, UseDropDownDto } from "../types/liteflixTypes";

/**
 * Custom hook to manage dropdown state and category selection within the Liteflix application.
 *
 * @returns {UseDropDownDto} An object containing the current selected category, the list of available movie categories,
 * the open state of the dropdown menu, and handler functions to interact with the dropdown.
 */
export const useDropDown = (): UseDropDownDto => {
  const { currentCategory, availableMovieCategories, changeToCategory } = useContext(MoviesContext);
  const { isOpen, toggleIsOpen } = useToggle();

  /**
   * Toggles the dropdown menu's open state and adjusts the z-index of related elements.
   */
  const handleDropDownClick = () => {
    const movieList = document.querySelector("#movie-list") as HTMLElement | null;
    if (movieList) movieList.style.zIndex = isOpen ? "2" : "1";

    const dropdownModal = document.querySelector("#dropdown-modal") as HTMLElement | null;
    if (dropdownModal) dropdownModal.style.zIndex = isOpen ? "1" : "2";

    toggleIsOpen();
  };

  /**
   * Handles the event when a category item is clicked by updating the current category and closing the dropdown.
   *
   * @param {CategoryKey} tag - The category key to switch to.
   */
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