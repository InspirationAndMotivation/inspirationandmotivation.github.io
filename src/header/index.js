import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import './style.css';

const Header = () => {
  const { t } = useTranslation();
  const [isActive, setActive] = useState('false');

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <>
      <header className="fixed-top site__header">
        <div className="d-flex align-items-center justify-content-between menu">
          <Link className="navbar-brand nav_ac p-3" to="/">
            <div className="logo"></div>
          </Link>
          <div className="menu__container p-3">
            <ul className="menu">
              <li className="menu_item ">
                <Link onClick={handleToggle} to={'/'} className="my-3">
                  {t('header.home')}
                </Link>
              </li>
              <li className="menu_item">
                <Link onClick={handleToggle} to="/about" className="my-3">
                  {t('header.about')}
                </Link>
              </li>{' '}
              <li className="menu_item">
                <Link onClick={handleToggle} to="/portfolio" className="my-3">
                  {t('header.portfolio')}
                </Link>
              </li>
              <li className="menu_item">
                <Link onClick={handleToggle} to="/contact" className="my-3">
                  {' '}
                  {t('header.contact')}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
