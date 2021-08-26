import React, { useEffect, useState } from 'react'
import Item from '../Item/Item';
import './ItemList.css';
import { Link, useParams } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount'
import axios from 'axios';

const ItemList = () => {

    const {categoryId} = useParams();
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios('products.json').then(res =>
            categoryId 
            ? setItems(res.data.filter((item) => item.category === categoryId)) 
            : setItems(res.data)
        );
    },[categoryId]);

    return (
        <div className="container-fluid py-5 cards">
            {items.map((item) => {
                return(
                    <div key={item.id} className="cardItem">
                        {/* ABRO LLAVES PARA USAR LENGUAJE JS EN JSX, USO BACKTIPS NO SE POR QUE ¿? */}
                        <Link to={`/item/${item.id}`}>
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
