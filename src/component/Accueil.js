import React, { Component } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import { MDBAnimation } from "mdbreact";
import Moi from "../img/moi.png";
import "./Accueil.css";

class Accueil extends Component {
  render() {
    return (
      <div id="accueil" className="Accueil">

        <div className="container">
          <div className="row">
            <MDBAnimation className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12" type="fadeInLeft"  duration="5s">

              <Jumbotron className="jumbotronAccueil">
                <div className="row">
                  <div className="col-xl-7 col-lg-7 col-md-6 col-sm-7 col-7">
                    <h1 className="infos">Jérôme Carrière</h1>
                    <h2 className="infos">Développeur front-end</h2>
                    <p className="infos"> <i class="iconeAccueil far fa-envelope"></i>jerome.carriere6459@gmail.com</p>
                    <p className="infos"><i class="iconeAccueil fas fa-mobile-alt"></i> 06.12.57.73.63</p>
                  </div>
                  <div className="col-xl-5 col-lg-5 col-md-6 col-sm-5 col-5">
                    <img className="moi" src={Moi} alt="Photo de moi meme" />
                  </div>
                </div>
                
              </Jumbotron>
            </MDBAnimation>
          </div>
        </div>
      </div>
    );
  }
}

export default Accueil;
