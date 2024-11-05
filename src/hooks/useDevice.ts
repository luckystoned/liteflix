import { useState, useEffect } from "react";

/**
 * Custom hook to detect if the device is mobile based on window width.
 *
 * @returns {{ isMobile: boolean }} Object containing the isMobile flag.
 */
export const useDevice = (): { isMobile: boolean } => {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 800);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 800);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { isMobile };
};