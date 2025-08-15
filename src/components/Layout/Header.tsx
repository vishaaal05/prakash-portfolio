// components/Layout/Header.tsx
import React from 'react';
import { Menu, X, Instagram, } from 'lucide-react';
import type { HeaderProps } from '../../types';
import { navigationItems } from '../../data/portfolioData';
import { useMobileMenu } from '../../hooks/useMobileMenu';

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigationClick }) => {
  const { isMenuOpen, toggleMenu, closeMenu } = useMobileMenu();

  const handleNavClick = (path: string) => {
    onNavigationClick(path);
    closeMenu();
  };

  const isCurrentPage = (path: string): boolean => {
    if (path === '/home' && currentPage === '') return true;
    return currentPage === path;
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <div 
            className="text-center cursor-pointer"
            onClick={() => handleNavClick('/home')}
          >
            <img src="logo.png" alt="Logo" className='h-12 w-full object-contain'/>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavClick(item.path)}
                className={`text-base font-light transition-colors ${
                  isCurrentPage(item.path)
                    ? 'text-blue-600 border-b-2 border-blue-600 pb-1'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Instagram Icon */}
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

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-6 py-3 space-y-3">
            {navigationItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavClick(item.path)}
                className={`block w-full text-left text-base font-light transition-colors ${
                  isCurrentPage(item.path)
                    ? 'text-blue-600'
                    : 'text-gray-600'
                }`}
              >
                {item.name}
              </button>
            ))}
            <div className="pt-3 border-t border-gray-200">
              <a 
                href="https://instagram.com/sethphotography" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Instagram className="w-5 h-5 text-gray-600" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;