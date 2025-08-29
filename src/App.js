import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import withRouter from './hooks/withRouter';
import AppRoutes from './routes';
import Header from './header';
import Footer from './footer';
import './hooks/i18n';
import './App.css';

export default function App() {
  function _ScrollToTop(props) {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo({ top: window.scrollY, behavior: 'auto' });

      let timer = setTimeout(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      }, 100);

      return () => clearTimeout(timer);
    }, [pathname]);

    return props.children;
  }

  const ScrollToTop = withRouter(_ScrollToTop);

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
