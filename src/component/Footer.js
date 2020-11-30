import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component{
    render(){
        return(

            <div className="Footer">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-xl-12">
                            <p>© 2020 Copyright: Jérôme Carrière</p>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Footer;