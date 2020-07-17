import React from 'react';

import Layout from '../components/Layout';

import intro from '../assets/images/intro.jpg';
const IndexPage = () => (
  <Layout activeLink="home">
    <section className="page-section clearfix">
      <div className="container">
        <div className="intro">
          <img
            className="intro-img img-fluid mb-3 mb-lg-0 rounded"
            src={intro}
            alt=""
          />
          <div className="intro-text left-0 text-center bg-faded p-5 rounded">
            <h2 className="section-heading mb-4">
              <span className="section-heading-upper">@beast.ocr</span>
              <span className="section-heading-lower">Beast Ocr</span>
            </h2>
            <p className="mb-3">
              Somos los creadores del evento Beast Ocr, una carrera 
              de obstáculos para todas las edades.
            </p>
            <div className="intro-button mx-auto">
              <a className="btn btn-primary btn-xl" href="https://www.instagram.com/beast.ocr/?hl=es-la">
                Visita nuestro Instagram!
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="page-section cta">
      <div className="container">
        <div className="row">
          <div className="col-xl-9 mx-auto">
            <div className="cta-inner text-center rounded">
              <h2 className="section-heading mb-4">
                <span className="section-heading-upper">Nuestra Promesa</span>
                <span className="section-heading-lower">Para Vos</span>
              </h2>
              <p className="mb-0">
                Persiste, resiste y progresa.
                Somos salud, entrenamiento y bienestar.
                
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
