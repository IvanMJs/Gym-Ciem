import React from 'react';

import Layout from '../components/Layout';

import about from '../assets/images/about.jpg';
const IndexPage = () => (
  <Layout activeLink="about">
    <section className="page-section about-heading">
      <div className="container">
        <img
          className="img-fluid rounded about-heading-img mb-3 mb-lg-0"
          src={about}
          alt=""
        />
        <div className="about-heading-content">
          <div className="row">
            <div className="col-xl-9 col-lg-10 mx-auto">
              <div className="bg-faded rounded p-5">
                <h2 className="section-heading mb-4">
                  <span className="section-heading-upper">
                    Sobre Nosotros
                  </span>
                  <span className="section-heading-lower">Que es lo que hacemos</span>
                </h2>
                <p>
                  Algo sobre tu gimnasio
                </p>
                <p className="mb-0">
                   <em>Siempre Entrenar</em> sobre el gimnasio y que es lo que hacen
                  
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
