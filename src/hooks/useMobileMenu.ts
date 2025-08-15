// hooks/useMobileMenu.ts
import { useState, useEffect } from "react";

export const useMobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  // Close menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    if (!isMenuOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      const menuButton = document.querySelector(
        '[aria-label="Open menu"], [aria-label="Close menu"]'
      );
      const mobileMenu = document.querySelector(".md\\:hidden.bg-white");

      // Don't close if clicking the menu button itself
      if (menuButton && menuButton.contains(target)) {
        return;
      }

      // Don't close if clicking inside the mobile menu
      if (mobileMenu && mobileMenu.contains(target)) {
        return;
      }

      setIsMenuOpen(false);
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMenuOpen]);
  
  return {
    isMenuOpen,
    toggleMenu,
    closeMenu,
    openMenu,
  };
};
