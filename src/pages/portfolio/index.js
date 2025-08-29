import React from 'react';
import './style.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { meta, projects } from '../../mockedData';
import { useTranslation } from 'react-i18next';
import { Container, Row, Col } from 'react-bootstrap';

export const Portfolio = () => {
  const { t } = useTranslation();

  return (
    <HelmetProvider>
      <Container className="portfolio_page">
        <Helmet>
          <meta charSet="utf-8" />
          <title>
            {meta.title} | {t('pages.portfolio.title')}
          </title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-3 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-65 mb-4">{t('pages.portfolio.title')}</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp w-100">
          <Col lg="5" className="mb-5 w-100 projects">
            <h4>{t('pages.portfolio.projectsInfo')}</h4>
            <div className="project_container">
              {projects.map((data, i) => {
                return (
                  <div key={i} className="project_box">
                    <div className="project_title">
                      <div className="project_img">
                        <a href={data.link}>
                          <img
                            src={require(`../../assets/images/projects/${data.image.toString()}`)}
                            alt={data.name}
                            className="project_img"
                          ></img>
                        </a>
                      </div>
                      <h5>{data.name}</h5>
                    </div>
                    <p>{data.type}</p>
                    <p>{data.description}</p>
                    <p>
                      <b>{t('pages.portfolio.stack')}</b> {data.stack}
                    </p>
                  </div>
                );
              })}
            </div>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
