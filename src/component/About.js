import React, { Component } from "react";
import "./About.css";

class About extends Component {
  render() {
    return (
      <div id="about" className="About">
        <h1>
        Mes services
        </h1>
        <div className="container">
          <div className="row info pb-5 text-center">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 flex-column justify-content-center">
            <i class="iconeAbout fas fa-laptop-code"></i>

            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
            <h4>
              Création de sites web
              </h4>
              <p>Sites vitrines, sites e-commerce etc...</p>
            </div>
            
          </div>

          <div className="row pb-5 text-center">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 flex-column justify-content-center">
            <i class="iconeAbout fas fa-chart-line"></i>

            </div>

            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
            <h4>
                Référencement naturel
              </h4>
              <p>Optimisation du contenu pour une meilleure visibilité.</p>
            </div>
          </div>

          <div className="row pb-5 text-center">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 flex-column justify-content-center" >
            <i class="iconeAbout fas fa-chart-line"></i>

            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 flex-column justify-content-center">
            <h4>
              Intégration web
              </h4>
              <p>Intégrations HTML / CSS respectueuses des standards du Web.</p>
            </div>
          </div>

          <div className="row text-center">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 flex-column justify-content-center">
            <i className="iconeAbout fas fa-chart-line text-right"></i>

            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 ">
            <h4>
          Responsive design
              </h4>
              <p>Compatible pc, tablettes, mobile.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
