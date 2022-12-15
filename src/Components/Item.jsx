import React from "react";
import { Link } from "react-router-dom";

const Item = ({item}) => {
    return (
        <Link to={"/item/" + item.id} className="text-decoration-none text-dark">
            <div className="card border border-0 text-warning bg-dark mt-2">
                <img src={item.imagen} width="280" height="280" className="card-img"  alt={item.nombre} />
                <div className="card-body text-center">
                    <p className="card-text">{item.nombre}</p>
                </div>
            </div>
        </Link>
    )
}

export default Item;