import React from "react";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><img src={"images/giraucar-logo-blanco.png"} alt={"logo Giraucar"} width={120}/></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" to={"/Home"}>Home</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                            <NavLink className="nav-link dropdown-toggle" to={"/"} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Autos
                            </NavLink>
                                <ul className="dropdown-menu">
                                    <li><NavLink className="dropdown-item" to={"/category/Ford"}>Ford</NavLink></li>
                                    <li><NavLink className="dropdown-item" to={"/category/Renoult"}>Renoult</NavLink></li>
                                    <li><NavLink className="dropdown-item" to={"/category/Citroen"}>Citroen</NavLink></li>
                                    <li><NavLink className="dropdown-item" to={"/category/Fiat"}>Fiat</NavLink></li>
                                </ul>
                            </li>
                            <NavLink className="nav-link" to={"/Contactenos"}>Contactenos</NavLink>
                        </ul>
                        <div className="d-flex justify-content-end align-items-center">
                        <CartWidget />
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;