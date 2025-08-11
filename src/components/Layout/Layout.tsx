// components/Layout/Layout.tsx
import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  currentPage: string;
  onNavigationClick: (path: string) => void;
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  currentPage, 
  onNavigationClick 
}) => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header 
        currentPage={currentPage} 
        onNavigationClick={onNavigationClick} 
      />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;