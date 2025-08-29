import React from 'react';
import './style.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import {
  meta,
  worktimeline,
  educationtimeline,
  skills,
} from '../../mockedData';

export const About = () => {
  const { t } = useTranslation();

  return (
    <HelmetProvider>
      <Container className="about_page">
        <Helmet>
          <meta charSet="utf-8" />
          <title>
            {' '}
            {t('pages.about.title')} | {meta.title}
          </title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-3 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-65 mb-4">{t('pages.about.me')}</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className=" sec_sp">
          <Col lg="3">
            <h3 className="color_sec py-4">{t('pages.about.workTimeline')}</h3>
          </Col>
          <Col lg="9">
            <table className="table caption-top">
              <tbody>
                {worktimeline.map((data, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row" width={'35%'}>
                        {data.jobtitle}
                      </th>
                      <td width={'20%'}>{data.employer}</td>
                      <td>{data.where}</td>
                      <td>{data.date}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row>
        <Row className=" sec_sp">
          <Col lg="3">
            <h3 className="color_sec py-4">{t('pages.about.education')}</h3>
          </Col>
          <Col lg="9">
            <table className="table caption-top">
              <tbody>
                {educationtimeline.map((data, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row" width={'35%'}>
                        {data.school}
                      </th>
                      <td width={'20%'}>{data.degree}</td>
                      <td>{data.where}</td>
                      <td>{data.date}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="3">
            <h3 className="color_sec py-4">{t('pages.about.skills')}</h3>
          </Col>
          <Col lg="9">
            <div className="skill_container">
              {skills.map((data, i) => {
                return (
                  <div key={i} className="skill_box">
                    <div className="skill_title">
                      <div className="skill_img">
                        <img
                          src={require(`../../assets/images/skills/${data.img_name.toString()}`)}
                          alt={data.alt}
                          className="skill_img"
                        ></img>
                      </div>
                      <h5>{data.name}</h5>
                    </div>
                    <p>{data.info}</p>
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
