import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter as Router, useLocation } from 'react-router-dom';
import AppRoutes from './routes';
import Header from './header';
import Footer from './footer';
import './hooks/i18n';
import './App.css';

export default function App() {
  function ScrollToTop({ children }) {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo({ top: window.scrollY, behavior: 'auto' });

      const timer = setTimeout(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      }, 100);

      return () => clearTimeout(timer);
    }, [pathname]);

    return children;
  }

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <ScrollToTop>
        <Header />
        <AppRoutes />
        <Footer />
      </ScrollToTop>
    </Router>
  );
}
