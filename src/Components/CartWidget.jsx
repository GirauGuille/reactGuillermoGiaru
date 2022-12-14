import React from "react";

const CartWidget = () => {
    return (
        <button type="button" className="btn btn-light">
            <img src={"images/car-carrito.svg"} alt={"Carrito"} width={24} /> 
            <span className="badge text-bg-secondary">0</span>
        </button>
    )
}

export default CartWidget;