import React from "react";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/"><img src={"images/giraucar-logo-blanco.png"} alt={"logo Giraucar"} width={120}/></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                                <a className="nav-link" href="/Shop">Home</a>
                            </li>
                            <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Autos
                            </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/">Ford</a></li>
                                    <li><a className="dropdown-item" href="/">Renoult</a></li>
                                    <li><a className="dropdown-item" href="/">Citroen</a></li>
                                    <li><a className="dropdown-item" href="/">Fiat</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/Shop">Contactenos</a>
                            </li>
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