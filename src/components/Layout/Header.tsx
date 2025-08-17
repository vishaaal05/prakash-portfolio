// components/Layout/Header.tsx
import React from "react";
import { Menu, X, Instagram, Linkedin } from "lucide-react";
import type { HeaderProps } from "../../types";
import { navigationItems } from "../../data/portfolioData";
import { useMobileMenu } from "../../hooks/useMobileMenu";

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigationClick }) => {
  const { isMenuOpen, toggleMenu, closeMenu } = useMobileMenu();

  const handleNavClick = (path: string) => {
    // If path doesn't start with /, add it
    const normalizedPath = path.startsWith("/") ? path : `/${path}`;
    onNavigationClick(normalizedPath);
    closeMenu();
  };

  const isCurrentPage = (path: string): boolean => {
    // Normalize paths for comparison
    const normalizedPath = path.startsWith("/") ? path : `/${path}`;
    const normalizedCurrentPage = currentPage.startsWith("/")
      ? currentPage
      : `/${currentPage}`;

    if (
      normalizedPath === "/home" &&
      (normalizedCurrentPage === "/" || normalizedCurrentPage === "/home")
    )
      return true;

    return normalizedCurrentPage === normalizedPath;
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <div
            className="text-center cursor-pointer"
            onClick={() => handleNavClick("/home")}
          >
            <img
              src="logo.png"
              alt="Logo"
              className="h-14 w-full object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavClick(item.path)}
                className={`text-base font-light transition-colors ${
                  isCurrentPage(item.path)
                    ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                    : "text-gray-600 hover:text-gray-800"
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>
          <div className="flex space-x-4">
            {/* Social Icons */}
            <div className="hidden md:block">
              <a
                href="https://www.instagram.com/pearl.hdcreation/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-800 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>

            {/* Instagram Icon */}
            <div className="hidden md:block">
              <a
                href="https://www.linkedin.com/in/prakash-kumar-anand-28683317a/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-800 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            onTouchStart={(e) => e.preventDefault()} // Prevent ghost clicks
          >
            {isMenuOpen ? (
              <X className="w-5 h-5 text-gray-700" />
            ) : (
              <Menu className="w-5 h-5 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div  id="mobile-menu" className="md:hidden bg-white border-t border-gray-200 shadow-lg fixed top-[57px] left-0 right-0 h-auto max-h-[calc(100vh-57px)] overflow-y-auto z-40"
        role="navigation">
          <div className="px-6 py-4 space-y-4">
            {navigationItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavClick(item.path)}
                className={`block w-full text-left py-2 text-base font-light transition-colors ${
                  isCurrentPage(item.path)
                    ? "text-blue-600 font-medium"
                    : "text-gray-600 hover:text-blue-500"
                }`}
              >
                {item.name}
              </button>
            ))}
            <div className="pt-4 border-t border-gray-200 flex space-x-6">
              <div>
                <a
                  href="https://www.instagram.com/pearl.hdcreation/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                  <span className="text-sm">Instagram</span>
                </a>
              </div>
              <div>
                <a
                  href="https://www.instagram.com/pearl.hdcreation/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  <span className="text-sm">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
