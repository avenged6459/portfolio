import React, { Component } from "react";
import { MDBAnimation, MDBCard, MDBCardBody, MDBIcon, MDBBtn, MDBInput } from "mdbreact";
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
          <MDBCard className="formulaire">
            <MDBCardBody>
              <div className="form-header blue accent-1">
                <h3 className="mt-2">
                  <MDBIcon icon="envelope" /> Ecrivez-moi:
                </h3>
              </div>
              
              <div className="md-form">
                <MDBInput
                  icon="user"
                  label="Nom ou nom de la société"
                  iconClass="grey-text"
                  type="text"
                  id="form-name"
                />
              </div>
              <div className="md-form">
                <MDBInput
                  icon="envelope"
                  label="E-mail"
                  iconClass="grey-text"
                  type="text"
                  id="form-email"
                />
              </div>
              <div className="md-form">
                <MDBInput
                  icon="tag"
                  label="Objet"
                  iconClass="grey-text"
                  type="text"
                  id="form-subject"
                />
              </div>
              <div className="md-form">
                <MDBInput
                  icon="pencil-alt"
                  label="Message"
                  iconClass="grey-text"
                  type="textarea"
                  id="form-text"
                />
              </div>
              <div className="text-center">
                <MDBBtn color="light-blue">Envoyer</MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>
              
            
            </MDBAnimation>
            {/* map */}
            <MDBAnimation className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12" type="fadeInRight" duration="5s">
          
              <iframe className="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40708.55163600622!2d3.065427133032472!3d50.37989524309032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c2c9374fe2711f%3A0x40af13e81646df0!2sDouai!5e0!3m2!1sfr!2sfr!4v1606222275468!5m2!1sfr!2sfr"
                width="650"
                height="500"
                frameborder="0"
                style={{ border: "0;" }}
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"
              ></iframe>
            </MDBAnimation>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
