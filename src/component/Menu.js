import React, { Component } from "react";
import { bubble as Menu } from 'react-burger-menu';
import "./Menus.scss";

class Navbar extends Component{
  render(){
    return(

      <Menu >
      <ul>
        <li><a className="menu-item" href="#accueil">
          Accueil
        </a></li>
  
        <li> <a className="menu-item" href="#about">
          A propos
        </a></li>
  
        <li><a className="menu-item" href="#competences">
          Compétences
        </a></li>
  
        <li> <a className="menu-item" href="#tarifs">
        Tarifs
        </a></li>
  
        <li> <a className="menu-item" href="#contact">
        Contact
        </a></li>
      </ul>  
      </Menu>

    );
  }
}


export default Navbar;
   
