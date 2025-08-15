// App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import Fashion from './pages/Fashion/Fashion';
import Product from './pages/Product/Product';
import Ecommerce from './pages/Ecommerce/Ecommerce';
import Contact from './pages/Contact/Contact';

const AppContent: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  // Get the current path without the leading slash
  const currentPath = location.pathname === '/' ? '' : location.pathname;

  return (
    <Layout 
      currentPage={currentPath}
      onNavigationClick={handleNavigation}
    >
      <Routes>
        <Route path="/" element={<Home onNavigate={handleNavigation} />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="/fashion" element={<Fashion onNavigate={handleNavigation} />} />
        <Route path="/product" element={<Product onNavigate={handleNavigation} />} />
        <Route path="/ecommerce" element={<Ecommerce onNavigate={handleNavigation} />} />
        <Route path="/contact" element={<Contact onNavigate={handleNavigation} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
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