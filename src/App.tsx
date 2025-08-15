// App.tsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, useLocation, useNavigate } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import Fashion from './pages/Fashion/Fashion';
import Product from './pages/Product/Product';
import Ecommerce from './pages/Ecommerce/Ecommerce';
import Contact from './pages/Contact/Contact';

type PageType = 'home' | 'fashion' | 'product' | 'ecommerce' | 'contact';

const AppContent: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [pageTransition, setPageTransition] = useState(false);

  // Set initial page based on URL on mount
  useEffect(() => {
    const path = location.pathname;
    let initialPage: PageType = 'home';
    
    if (path.includes('fashion')) initialPage = 'fashion';
    else if (path.includes('product')) initialPage = 'product';
    else if (path.includes('ecommerce')) initialPage = 'ecommerce';
    else if (path.includes('contact')) initialPage = 'contact';
    
    setCurrentPage(initialPage);
  }, [location.pathname]);

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [currentPage]);

  const handleNavigation = (path: string) => {
    // Update browser URL
    navigate(path);
    
    // Add transition effect
    setPageTransition(true);
    
    // Short delay to allow fade out transition
    setTimeout(() => {
      switch (path) {
        case '/home':
        case '/':
          setCurrentPage('home');
          break;
        case '/fashion':
          setCurrentPage('fashion');
          break;
        case '/product':
          setCurrentPage('product');
          break;
        case '/ecommerce':
          setCurrentPage('ecommerce');
          break;
        case '/contact':
          setCurrentPage('contact');
          break;
        default:
          setCurrentPage('home');
      }
      
      // Reset transition after slight delay
      setTimeout(() => setPageTransition(false), 50);
    }, 300);
  };

  const renderCurrentPage = () => {
    const pageProps = { onNavigate: handleNavigation };
    
    switch (currentPage) {
      case 'home':
        return <Home {...pageProps} />;
      case 'fashion':
        return <Fashion {...pageProps} />;
      case 'product':
        return <Product {...pageProps} />;
      case 'ecommerce':
        return <Ecommerce {...pageProps} />;
      case 'contact':
        return <Contact {...pageProps} />;
      default:
        return <Home {...pageProps} />;
    }
  };

  // Get the current path
  const currentPath = location.pathname === '/' ? '/home' : location.pathname;

  return (
    <Layout 
      currentPage={currentPath}
      onNavigationClick={handleNavigation}
    >
      <div className={`transition-opacity duration-300 ${pageTransition ? 'opacity-0' : 'opacity-100'}`}>
        {renderCurrentPage()}
      </div>
    </Layout>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;