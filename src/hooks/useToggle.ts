import { useState, useCallback } from 'react';
import { UseToggleDto } from '../types/liteflixTypes';


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
