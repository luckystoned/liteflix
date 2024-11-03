import { useState, useEffect } from "react";

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