import React, { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const Headermain = () => {
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
                <Link onClick={handleToggle} to="/" className="my-3">
                  Home
                </Link>
              </li>
              <li className="menu_item">
                <Link onClick={handleToggle} to="/about" className="my-3">
                  About
                </Link>
              </li>
              <li className="menu_item">
                <Link onClick={handleToggle} to="/contact" className="my-3">
                  {' '}
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Headermain;
