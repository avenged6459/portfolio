import React, { Component } from "react";
import { MDBAnimation } from "mdbreact";
import "./Contact.css";

class Contact extends Component {
  render() {
    return (
      <section id="contact" className=" contact">
        
        {/* formulaire de contact */}

        <h1>
          Contactez-moi
        </h1>

        <div className="container">


          <div className="row">
          <MDBAnimation className=" forms col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12" type="fadeInLeft" duration="5s">
            

            

              <h3 className="titreForms text-center">Ecrivez-moi !</h3>

              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className=" nameForm input-group-text" id="basic-addon1">
                    Nom
                  </span>
                </div>
                <input
                  type="text"
                  class="form-control"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>

              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="nameForm input-group-text" id="basic-addon1">
                    E-mail
                  </span>
                </div>
                <input
                  type="text"
                  class="form-control"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>

              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="nameForm input-group-text" id="basic-addon1">
                    Objet
                  </span>
                </div>
                <input
                  type="text"
                  class="form-control"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>

              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="nameForm input-group-text" id="basic-addon1">
                    Message
                  </span>
                </div>
                <textarea
                  type="text"
                  class="form-control"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
              
              <button type="button" class="btn btn-primary">
                Envoyer
              </button>
              
            
            </MDBAnimation>
            {/* map */}
            <MDBAnimation className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12" type="fadeInRight" duration="5s">
          
              <iframe className="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40708.55163600622!2d3.065427133032472!3d50.37989524309032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c2c9374fe2711f%3A0x40af13e81646df0!2sDouai!5e0!3m2!1sfr!2sfr!4v1606222275468!5m2!1sfr!2sfr"
                width="650"
                height="350"
                frameborder="0"
                style={{ border: "0;" }}
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"
              ></iframe>


              {/* Bouton reseaux sociaux/contact */}

              <div className="row pt-5 pb-3">
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4">
                  <center>
                    <div className="container">
                      <div className="button2b">
                        <div className="button2b-content">
                          <i className="iconeMail fab fa-twitter"></i>
                        </div>
                      </div>
                    </div>
                  </center>
                </div>

                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4">
                  <center>
                    <div className="container">
                      <div className="button2bLK">
                        <div className="button2bLK-content">
                          <i className="iconeMail fab fa-linkedin"></i>
                        </div>
                      </div>
                    </div>
                  </center>
                </div>

                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4">
                  <center>
                    <div className="container">
                      <div className="button2bMail">
                        <div className="button2bMail-content">
                          <i className="iconeMail far fa-envelope"></i>
                        </div>
                      </div>
                    </div>
                  </center>
                </div>
              </div>
            
            </MDBAnimation>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
