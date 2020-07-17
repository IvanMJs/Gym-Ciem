import React from 'react';

import Layout from '../components/Layout';

//import about from '../assets/images/about.jpg';

const IndexPage = () => (
  <Layout activeLink="store">
    <section className="page-section cta">
      <div className="container">
        <div className="row">
          <div className="col-xl-9 mx-auto">
            <div className="cta-inner text-center rounded">
              <h2 className="section-heading mb-5">
                <span className="section-heading-upper">Visitanos!</span>
                <span className="section-heading-lower">Estamos Abiertos!</span>
              </h2>
              <ul className="list-unstyled list-hours mb-5 text-left mx-auto">
                <li className="list-unstyled-item list-hours-item d-flex">
                  Domingo
                  <span className="ml-auto">Cerrado</span>
                </li>
                <li className="list-unstyled-item list-hours-item d-flex">
                  Lunes
                  <span className="ml-auto">7:00 AM to 9:00 PM</span>
                </li>
                <li className="list-unstyled-item list-hours-item d-flex">
                  Martes
                  <span className="ml-auto">7:00 AM to 8:00 PM</span>
                </li>
                <li className="list-unstyled-item list-hours-item d-flex">
                  Miércoles
                  <span className="ml-auto">7:00 AM to 8:00 PM</span>
                </li>
                <li className="list-unstyled-item list-hours-item d-flex">
                  Jueves
                  <span className="ml-auto">7:00 AM to 8:00 PM</span>
                </li>
                <li className="list-unstyled-item list-hours-item d-flex">
                  Viernes
                  <span className="ml-auto">7:00 AM to 8:00 PM</span>
                </li>
                <li className="list-unstyled-item list-hours-item d-flex">
                  Sábado
                  <span className="ml-auto">9:00 AM to 13:00 PM(Por pedido)</span>
                </li>
              </ul>
              <p className="address mb-5">
                <em>
                  <strong>Rivadavia 301</strong>
                  <br />
                  Rafaela Santa Fe
                </em>
              </p>
              <p className="mb-0">
                <small>
                  <em>Llamanos!</em>
                </small>
                <br />
                (3492) 301050
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
