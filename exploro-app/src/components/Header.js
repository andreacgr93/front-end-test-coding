import React from "react";
import {Link} from "react-router-dom";

const Header = () =>{
  return(
    <nav id="navbar-loro" className="navbar navbar-expand-lg navbar-dark bg-dark">

      <div className="container-fluid">

        <h1 className="text-light mx-4">
            ExpL<span className="text-success font-weight-bold">o</span>ro
        </h1>

        <button 
            className="navbar-toggler" 
            type="button" 
            data-toggle="collapse" 
            data-target="#navbarItems" 
            aria-controls="navbarItems" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
        >
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarItems">

            <ul className="navbar-nav mx-5">
                <Link className="nav-link" to={"/home"}>Inicio</Link>
                <Link className="nav-link" to={"/search"}>Usuarios</Link>
                <Link className="nav-link" to={"/market"}>Tienda</Link>
            </ul>
            <span>
                <a className="mx-3" href="#notificatios">
                    <i className="fa fa-bell fa-lg text-light"></i>
                </a>
                <a className="mx-3" href="#login">
                    <i className="fa fa-user-circle fa-lg text-light"></i>
                </a>
            </span>

        </div>

      </div>
  </nav>
  )
}

export default Header