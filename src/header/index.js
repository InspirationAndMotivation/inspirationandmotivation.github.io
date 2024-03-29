import React, { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { logotext } from '../mockedData';

const Headermain = () => {
  const [isActive, setActive] = useState('false');

  const handleToggle = () => {
    setActive(!isActive);
    document.body.classList.toggle('ovhidden');
  };

  return (
    <>
      <header className="fixed-top site__header">
        <div className="d-flex align-items-center justify-content-between">
          <Link className="navbar-brand nav_ac p-3" to="/">
            {logotext}
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
