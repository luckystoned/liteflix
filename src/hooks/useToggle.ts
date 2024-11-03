import { useState, useCallback } from 'react';
import { UseToggle } from '../types/liteflixTypes';

export const useToggle = (initialState: boolean = false): UseToggle => {
  const [isOpen, setIsOpen] = useState(initialState);

  const toggleIsOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return {
    isOpen,
    toggleIsOpen,
  };
};
