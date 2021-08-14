import React, {Component} from "react";
import {Link} from "react-router-dom"

export default class List extends Component{

    render(){
        return(
            <li className="list-group-item">
                <Link to={`user-details/${this.props.userName}`} className="text-decoration-none">
                    <p className="font-weight-bolder text-dark">{this.props.userName}</p>
                    <small className="text-muted">{this.props.id}</small> 
                </Link>
            </li>
        )
    }
}