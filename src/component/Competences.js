import React, { Component } from "react";
import HTML from "../img/html5.png";
import CSS from "../img/CSS3.png";
import SQL from "../img/Sql.png";
import JS from "../img/JavaScript.png";
import Bootstrap from "../img/bootstrap.png";
import SASS from "../img/SASS.png";
import RJS from "../img/React.png";
import WP from "../img/Wordpress.png";
import VSC from "../img/VSCODE.png";
import BALSA from "../img/balsamiq.png";
import FIGMA from "../img/figma.png";
import GITK from "../img/gitkraken.png";
import "./Competences.css";

class Competence extends Component {
  render() {
    return (
      <div id="competences" className="competences">
        <h1>
        Mes compétences
        </h1>

        <h2>Langages</h2>

        <div className="container">
          <div class="row text-center">
            <div className=" col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3 ">
              <p className="listcomp">HTML5</p>
              <img className="iconeComp" src={HTML} alt="Icone html5" />
            </div>

            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">
              <p className="listcomp">CSS3</p>
              <img className="iconeComp" src={CSS} alt="Icone CSS3" />
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">
              <p className="listcomp">Javascript</p>
              <img className="iconeComp" src={JS} alt="Icone Javascript" />
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">
              <p className="listcomp">Mysql</p>
              <img className="iconeComp" src={SQL} alt="Icone Sql" />
            </div>
          </div>

          <h2>Frameworks et CMS</h2>

          <div class="row text-center">
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">
              <p className="listcomp">Bootstrap</p>
              <img
                className="iconeComp"
                src={Bootstrap}
                alt="Icone Bootstrap "
              />
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">
              <p className="listcomp">SASS</p>
              <img className="iconeComp" src={SASS} alt="Icone SAAS" />
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">
              <p className="listcomp">React.js</p>
              <img className="iconeComp" src={RJS} alt="Icone React.js" />
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">
              <p className="listcomp">Wordpress</p>
              <img className="iconeComp ml-3" src={WP} alt="Icone Wordpress" />
            </div>
          </div>

          <h2>Outils</h2>

          <div class="row text-center pb-5">
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">
              <p className="listcomp">vs code</p>
              <img
                className="iconeComp"
                src={VSC}
                alt="Icone Visual studio code"
              />
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">
              <p className="listcomp">Balsamiq</p>
              <img className="iconeComp" src={BALSA} alt="Icone Balsamiq" />
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">
              <p className="listcomp">Figma</p>
              <img className="iconeComp" src={FIGMA} alt="Icone Figma" />
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">
              <p className="listcomp">Gitkraken</p>
              <img className="iconeCompgit" src={GITK} alt="Icone GitKraken" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Competence;
