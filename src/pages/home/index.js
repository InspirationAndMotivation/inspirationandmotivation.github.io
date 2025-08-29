import React from 'react';
import './style.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Typewriter from 'typewriter-effect';
import { introdata, meta } from '../../mockedData';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import mainImage from '../../assets/images/main_image.png';

export const Home = () => {
  const { t } = useTranslation();

  return (
    <HelmetProvider>
      <section id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="intro_sec d-block d-lg-flex align-items-center ">
          <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
            <div className="home_page align-self-center d-flex justify-content-around w-100">
              <div className="intro mx-3">
                <h2 className="mb-1x">{t('pages.home.introdata.title')}</h2>
                <h2 className="fluidz-48 mb-4">
                  <Typewriter
                    options={{
                      strings: [
                        introdata.animated.first,
                        introdata.animated.second,
                        introdata.animated.third,
                        introdata.animated.fourth,
                        introdata.animated.fifth,
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 10,
                    }}
                  />
                </h2>
                <p className="mb-2">{t('pages.home.introdata.firstLine')}</p>
                <p className="mb-2">{t('pages.home.introdata.secondLine')}</p>
                <p className="mb-5">{t('pages.home.introdata.thirdLine')}</p>
                <div className="intro_btn-action pb-5">
                  <Link to="/about">
                    <div id="button_p" className="ac_btn btn ">
                      {t('pages.home.abtButton')}
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                  <Link to="/contact">
                    <div id="button_p" className="ac_btn btn ">
                      {t('pages.home.cntButton')}
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="mx-3 align-items-baseline">
                <img
                  src={mainImage}
                  alt="My Avatar"
                  className="main_picture"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};
