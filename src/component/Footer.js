import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="Footer">
    <MDBFooter color="grey" className="font-small pt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>

          <MDBCol md="6">
            <h5 className="title text-center pb-4">Développeur web freelance</h5>
            <p className="textFooter">
              Passionné par l'informatique et le developpement web, je met a votre disposition mes compétences afin de réaliser vos projets: 
              créations de sites internet, modifications de sites internet, applications web. 
            </p>
          </MDBCol>

          <MDBCol md="6">
          <div className="row">
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
                
          </MDBCol>
         
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: Jérôme Carrière
        </MDBContainer>
      </div>
    </MDBFooter>
    </div>
  );
}

export default Footer;