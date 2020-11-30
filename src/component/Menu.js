import React, { Component } from'react';
import './Menu.css';
class Menu extends Component{
    render(){
        return(

<div id="en-tete">

  <div className="container">
      <div className="row">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
      <nav id="menu" className="navbar navbar-expand-lg fixed-top ">

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="btn from-left" href="#accueil">Accueil <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="btn from-top" href="#about">Services</a>
            </li>
            <li className="nav-item">
              <a className="btn from-top" href="#competences">Compétences</a>
              </li>
              <li className="nav-item">
              <a className="btn from-top" href="#tarifs">Tarifs</a>
              </li>
            <li className="nav-item">
              <a className=" btn from-right" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        </nav>
        
      </div>
      </div>
      
    </div>
  </div>
  

        );
    }
}

export default Menu;

