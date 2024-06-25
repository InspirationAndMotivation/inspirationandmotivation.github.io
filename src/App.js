import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import withRouter from './hooks/withRouter';
import AppRoutes from './routes';
import Header from './header';
import './hooks/i18n';
import './App.css';

export default function App() {
  function _ScrollToTop(props) {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return props.children;
  }

  const ScrollToTop = withRouter(_ScrollToTop);

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <ScrollToTop>
        <Header />
        <AppRoutes />
      </ScrollToTop>
    </Router>
  );
}
