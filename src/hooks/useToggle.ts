import { useState, useCallback } from 'react';

interface UseToggle {
  isOpen: boolean;
  toggleIsOpen: () => void;
}

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
