import React, {Component} from "react";
import Header from "./Header";
import FooterLoro from "./FooterLoro";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../node_modules/font-awesome/css/font-awesome.min.css";
import {BrowserRouter, Switch, Route } from "react-router-dom";
import Search from "./Search";


export default class Exploro extends Component{
	
    render(){
        return(
            <BrowserRouter>

                    <Header/>

                    <Switch>
                        <Route path={"/search"} component={Search}></Route>
                    </Switch>
                    
                    <FooterLoro/>

            </BrowserRouter>
        )
    }
}