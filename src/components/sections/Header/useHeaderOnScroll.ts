import { useState, useEffect } from "react";

export const useHeaderOnScroll = (maxScroll: number) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (e: Event) => {
      e.preventDefault();
      window.scrollY > maxScroll ? setIsScrolled(true) : setIsScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [maxScroll]);

  return { isScrolled };
};
