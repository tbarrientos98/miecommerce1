import React, { useEffect, useState } from 'react'
import Item from '../Item/Item';
import './ItemList.css';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount'


const ItemList = () => {

    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('products.json')
        .then(response => response.json())
        .then(data => setItems(data));
    }, []);

    return (
        <div className="container-fluid py-5 cards">
            {items.map((item) => {
                return(
                    <div key={item.id}>
                        {/* ABRO LLAVES PARA USAR LENGUAJE JS EN JSX, USO BACKTIPS NO SE POR QUE ¿? */}
                        <Link to={`/detail/${item.id}`}>
                            <Item data={item}/>
                        </Link>
                        <ItemCount initial={item.cantidad} stock={item.stock} seVendeEn={item.seVendeEn}/>

                    </div>
                );  
            })}
        </div>
    );
};

export default ItemList;
