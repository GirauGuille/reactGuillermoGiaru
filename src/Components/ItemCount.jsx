import React from "react";
import { useState } from "react";
import { useEffect } from "react";


const ItemCount = ({stockItems}) => {
    const [counter, setCounter] = useState(1);
    const [stock, setStock] = useState(stockItems)

    useEffect(()=>{
        setStock(stockItems)
    },[stockItems])

    const incrementarStock = () => {
        if (counter < stock) {
            setCounter (counter +1)
        }
    }
    const decrementarStock = () => {
        if (counter >1){
            setCounter (counter -1)
        }
    }
    const onAdd = () => {
        if (counter <= stock) {
            setStock(stock - counter);
            setCounter(1);
            console.log("Agregaste: " + counter + " Productos al Carrito!");
        }
    }

    return (
        <div className="container">
            <div className="row mb-3 d-flex justify-content-center">
                <div className="col-md-2 d-flex justify-content-center">
                    <div className="btn-group" role="group" aria-label="Basic outlined example">
                        <button type="button" className="btn btn-outline-primary" onClick={decrementarStock}>-</button>
                        <button type="button" className="btn btn-outline-primary">{counter}</button>
                        <button type="button" className="btn btn-outline-primary" onClick={incrementarStock}>+</button>
                    </div>
                </div>
            </div>
            <div className="row-md-2 mt-2">
                <button className="btn btn-outline-primary " onClick={onAdd}> <b>Agregar al carrito</b> </button>
            </div>
        </div>
    )
}

export default ItemCount;

/*     return (
        <div className="container py-5">
            <div className="row">
                <div className="col-md-12 text-center">
                    <div className="alert bg-danger" role="alert">
                        <p>{greeting}</p>
                    </div>
                    <ItemCount stockItems={10} />
                </div>
            </div>
        </div>
    ) */