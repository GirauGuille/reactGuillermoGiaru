import React from "react";
import { useParams, Link } from "react-router-dom";

const Finish = () => {
    const {id} = useParams();

    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-md-12 text-center">
                    <div className="alert alert-warning" role="alert">
                        <h1>¡Gracias por tu Compra!</h1>
                        <h2>En instantes nos comunicaremos con vos para llevarte tu vehículo nuevo a la puerta de tu casa.</h2>
                        <p>Tu Número de Compra es: <b>{id}</b></p>
                    </div>
                    <Link to={"/"} className="btn text-light bg-dark">Volver a la Página Principal</Link>
                </div>
            </div>
        </div>
    )
}

export default Finish;