import React, { useRef } from 'react';
import './style.css';
import emailjs from 'emailjs-com';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { meta } from '../../mockedData';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

export const ContactMe = () => {
  const { t } = useTranslation();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          alert('Thank you! Message sent successfully ✅');
        },
        (error) => {
          alert("Sorry, message wasn't because of next error: " + error.text);
        }
      );
  };

  return (
    <HelmetProvider>
      <Container className="contact_page">
        <Helmet>
          <meta charSet="utf-8" />
          <title>
            {meta.title} | {t('pages.contact.title')}
          </title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-3 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-6 mb-4">{t('pages.contact.me')}</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp w-100">
          <Col lg="5" className="mb-5">
            <h3 className="color_sec pb-4">{t('pages.contact.getInTouch')}</h3>
            <div className="pb-4">
              <Form ref={form} onSubmit={sendEmail}>
                <Row className="mb-3">
                  <Col md={6}>
                    <Form.Group controlId="formName">
                      <Form.Label>{t('pages.contact.formName')}</Form.Label>
                      <Form.Control
                        type="text"
                        name="user_name"
                        placeholder={t('pages.contact.formName')}
                        required
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group controlId="formEmail">
                      <Form.Label>{t('pages.contact.formMail')}</Form.Label>
                      <Form.Control
                        type="email"
                        name="user_email"
                        placeholder={t('pages.contact.formMail')}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group controlId="formMessage" className="mb-3">
                  <Form.Label>{t('pages.contact.formMessage')}</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    name="message"
                    placeholder={t('pages.contact.formMessage')}
                    required
                  />
                </Form.Group>

                <Button type="submit" className="send_button px-4 py-2">
                  {t('pages.contact.sendMessage')}
                </Button>
              </Form>

              <div className="text mt-4">
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
