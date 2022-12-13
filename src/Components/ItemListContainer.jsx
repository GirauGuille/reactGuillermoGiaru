import React, { useState, useEffect } from "react";
import { useParams} from "react-router-dom";
import ItemList from "./ItemList";
import autos from "./json/autos.json";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(id ? autos.filter(item => item.marca === id) : autos);
            }, 2000)
        });
        promesa.then((data) => {
            setItems(data);
        })
    }, [id]);
    
    return (
        <div className="container py-5">
            <ItemList items={items} />
        </div>
    )
}

export default ItemListContainer;