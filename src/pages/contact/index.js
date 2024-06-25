import React from 'react';
import './style.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { meta } from '../../mockedData';
import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from "react-i18next";
import { contactConfig } from '../../mockedData';

export const ContactMe = () => {
  const { t } = useTranslation();

  return (
    <HelmetProvider>
      <Container className="contact_page">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title} | {t('pages.contact.title')}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-3 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-5 mb-4">
              {t('pages.contact.me')}
            </h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp w-100">
          <Col lg="5" className="mb-5 w-100">
            <h3 className="color_sec pb-4">
              {t('pages.contact.getInTouch')}
            </h3>
            <div>
              <div className="text">
                <strong>{t('pages.contact.email')}</strong>{' '}
                <a href={`mailto:${contactConfig.contact_email}`}>
                  {contactConfig.contact_email}
                </a>
              </div>
              <br />
              <br />
              <div className="d-flex flex-row text">
                <strong>{t('pages.contact.phone')}</strong>{' '}
                <a href={`tel:${contactConfig.contact_phone}`}>
                  {contactConfig.contact_phone}
                </a>
              </div>
              <br />
              <br />
              <div className="d-flex flex-row text">
                <strong>{t('pages.contact.location')}</strong>{' '}
                <p>{contactConfig.contact_address}</p>
              </div>
              <br />
              <br />
              <div className="text">
                <p>{t('pages.contact.descFirstLine')}</p>
                <p>{t('pages.contact.descSecondLine')}</p>
                <p>{t('pages.contact.descThirdLine')}</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
