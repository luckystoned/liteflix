import { useState, useCallback } from 'react';
import { UseToggleDto } from '../types/liteflixTypes';

/**
 * Custom hook to manage a boolean toggle state.
 *
 * @param {boolean} initialState - The initial state of the toggle. Defaults to false.
 * @returns {UseToggleDto} An object containing the current state and a toggle function.
 */
export const useToggle = (initialState: boolean = false): UseToggleDto => {
  const [isOpen, setIsOpen] = useState(initialState);

  const toggleIsOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return {
    isOpen,
    toggleIsOpen,
  };
};
