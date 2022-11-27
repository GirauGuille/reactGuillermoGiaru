import React from "react";

const Footer = () => {
    return (
        <div className="container-fluid p-3 mb-2 bg-dark text-white">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h1>GIRAUCAR</h1>
                    </div>
                    <div className="col-md-6 text-end">
                        <p>
                            <a href={"https://www.facebook.com/BurgerKingArgentina"} target={"_blank"} className="me-3" rel="noreferrer"><img src={"images/SM-RRSS-04.png"} alt="Facebook" width={24} /></a>
                            <a href={"https://www.instagram.com/burgerkingarg/"} target={"_blank"} className="me-3" rel="noreferrer"><img src={"images/SM-RRSS-03.png"} alt="Instagram" width={24} /></a>
                        </p>
                    </div>
                </div>
            </div>
            <div>
            <div className="container-fuid">
                <div className="d-flex justify-content-center">
                    <img src="images/marca glg chico verde.svg" alt="logo Girau" width={80}/>
                </div>
                <div className="d-flex justify-content-center">
                    <p>Esta app fue creada por Guillermo Girau.</p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Footer;