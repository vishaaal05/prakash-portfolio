// App.tsx
import React, { useState } from 'react';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import Fashion from './pages/Fashion/Fashion';
import Product from './pages/Product/Product';
import Ecommerce from './pages/Ecommerce/Ecommerce';
import Contact from './pages/Contact/Contact';

type PageType = 'home' | 'fashion' | 'product' | 'ecommerce' | 'contact';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  const handleNavigation = (path: string) => {
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

  return (
    <Layout 
      currentPage={`/${currentPage === 'home' ? '' : currentPage}`}
      onNavigationClick={handleNavigation}
    >
      {renderCurrentPage()}
    </Layout>
  );
};

export default App;