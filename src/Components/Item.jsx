import React from "react";
import { Link } from "react-router-dom";

const Item = ({item}) => {
    return (
        <Link to={"/item/" + item.id} className="text-decoration-none text-dark">
            <div className="col-md-4">
                <div className="card mb-5">
                    <img src={item.foto} className="card-img-top" alt={item.nombre} />
                    <div className="card-body">
                        <div className="info-card">
                            <p>{item.nombre}</p>
                            <p>{item.marca}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Item;