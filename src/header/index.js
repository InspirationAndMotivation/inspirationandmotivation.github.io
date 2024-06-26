import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { languages } from '../mockedData';
import { useTranslation } from "react-i18next";
import './style.css';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isActive, setActive] = useState('false');

  const handleToggle = () => {
    setActive(!isActive);
  };

  const handleChangeLanguage = (event) => {
    localStorage.setItem("selectedLanguage", event.target.value);
    i18n.changeLanguage(event.target.value);
    handleStylingFixes(event.target.value);
  }

  const handleStylingFixes = (language) => {
    const stick_follow_icon = document.querySelectorAll(".stick_follow_icon p");
    if (!language.localeCompare("ru")) {
      stick_follow_icon[0].style.width = "120px";
      stick_follow_icon[0].style.height = "72px";
    } else {
      stick_follow_icon[0].style.width = "68px";
      stick_follow_icon[0].style.height = "20px";
    }
  }


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
                <Link onClick={handleToggle} to={'/'} className="my-3">
                  {t('header.home')}
                </Link>
              </li>
              <li className="menu_item about">
                <Link onClick={handleToggle} to="/about" className="my-3">
                  {t('header.about')}
                </Link>
              </li>{' '}
              <li className="menu_item portfolio">
                <Link onClick={handleToggle} to="/portfolio" className="my-3">
                  {t('header.portfolio')}
                </Link>
              </li>
              <li className="menu_item contact">
                <Link onClick={handleToggle} to="/contact" className="my-3">
                  {' '}
                  {t('header.contact')}
                </Link>
              </li>
              <li className="menu_item language">
                <select name="language_picker_select" id="language_picker_select" className="lg_select" onChange={handleChangeLanguage}>
                  <option lang={languages.en} value={languages.en}>EN</option>
                  <option lang={languages.fr} value={languages.fr}>FR</option>
                  <option lang={languages.pl} value={languages.pl}>PL</option>
                  <option lang={languages.ru} value={languages.ru}>RU</option>
                  <option lang={languages.ua} value={languages.ua}>UA</option>
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
