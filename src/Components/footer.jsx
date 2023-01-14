import React from "react";

const Footer = () => {
    return (
        <div className="container-fluid p-3 mb-2 bg-dark text-white">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <img src={"images/giraucar-logo-blanco.png"} alt={"logo Giraucar"} width={120}/>
                    </div>
                    <div className="col-md-4">
                        <ul>
                            <li>Financiamiento</li>
                            <li>Sedes</li>
                            <li>Preguntas frecuentes</li>
                            <li>Trabaja con nosotros</li>
                        </ul>
                    </div>
                    <div className="col-md-4 text-end">
                        <p>
                            <a href={"https://www.facebook.com/girauguillermo/"} target={"_blank"} className="me-3" rel="noreferrer"><img src={"images/SM-RRSS-04.png"} alt="Facebook Girau" width={24} /></a>
                            <a href={"https://www.instagram.com/girauguille/"} target={"_blank"} className="me-3" rel="noreferrer"><img src={"images/SM-RRSS-03.png"} alt="Instagram Girau" width={24} /></a>
                        </p>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <img src={"images/google-play.svg"} alt={"enlace play"} width={120}/>
                <img src={"images/app-store.svg"} alt={"enlace app"} width={120}/>
            </div>
            <div>
                <div className="container-fuid glg">
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