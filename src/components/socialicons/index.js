import React from 'react';
import './style.css';
import { useTranslation } from "react-i18next";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { socialprofils } from '../../mockedData';

export const Socialicons = (params) => {
  const { t } = useTranslation();

  return (
    <div className="stick_follow_icon">
      <ul>
        {socialprofils.github && (
          <li>
            <a href={socialprofils.github}>
              <FaGithub />
            </a>
          </li>
        )}
        {socialprofils.linkedin && (
          <li>
            <a href={socialprofils.linkedin}>
              <FaLinkedin />
            </a>
          </li>
        )}
      </ul>
      <p>{t('social.follow')}</p>
    </div>
  );
};
