import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { languages } from '../mockedData';
import { useTranslation } from 'react-i18next';
import './style.css';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isActive, setActive] = useState(false);
  const location = useLocation();

  const handleNavClick = (e, targetPath) => {
    if (location.pathname === targetPath) {
      e.preventDefault();
      return;
    }

    handleToggle();
  };

  const handleToggle = () => {
    if (isActive) return;

    setActive((prev) => !prev);
  };

  const handleChangeLanguage = (event) => {
    localStorage.setItem('selectedLanguage', event.target.value);
    i18n.changeLanguage(event.target.value);
  };

  return (
    <>
      <header className="fixed-top site__header">
        <div className="d-flex align-items-center menu">
          <Link className="navbar-brand nav_ac p-3" to="/">
            <div className="logo"></div>
          </Link>
          <div className="menu__container p-3">
            <ul className="menu">
              <li className="menu_item home">
                <Link
                  onClick={(e) => handleNavClick(e, '/')}
                  to={'/'}
                  className="my-3"
                >
                  {t('header.home')}
                </Link>
              </li>
              <li className="menu_item about">
                <Link
                  onClick={(e) => handleNavClick(e, '/about')}
                  to="/about"
                  className="my-3"
                >
                  {t('header.about')}
                </Link>
              </li>{' '}
              <li className="menu_item portfolio">
                <Link
                  onClick={(e) => handleNavClick(e, '/portfolio')}
                  to="/portfolio"
                  className="my-3"
                >
                  {t('header.portfolio')}
                </Link>
              </li>
              <li className="menu_item contact">
                <Link
                  onClick={(e) => handleNavClick(e, '/contact')}
                  to="/contact"
                  className="my-3"
                >
                  {' '}
                  {t('header.contact')}
                </Link>
              </li>
              <li className="menu_item language">
                <select
                  name="language_picker_select"
                  id="language_picker_select"
                  className="lg_select"
                  value={
                    i18n.language ||
                    localStorage.getItem('selectedLanguage') ||
                    languages.en
                  }
                  onChange={handleChangeLanguage}
                >
                  <option lang={languages.en} value={languages.en}>
                    EN
                  </option>
                  <option lang={languages.fr} value={languages.fr}>
                    FR
                  </option>
                  <option lang={languages.pl} value={languages.pl}>
                    PL
                  </option>
                  <option lang={languages.ru} value={languages.ru}>
                    RU
                  </option>
                  <option lang={languages.ua} value={languages.ua}>
                    UA
                  </option>
                </select>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
