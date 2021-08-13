import React, {Component} from "react";
import Header from "./Header";
import FooterLoro from "./FooterLoro";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../node_modules/font-awesome/css/font-awesome.min.css";

export default class Exploro extends Component{
	
    render(){
        return(
            <React.Fragment>

                    <Header/>
                    
                    <FooterLoro/>

            </React.Fragment>
        )
    }
}