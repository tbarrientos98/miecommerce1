import React, { useEffect, useState } from 'react'
import Item from '../Item/Item';
import './ItemList.css';

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
                    <Item data={item} key={item.id}/>
                );
            })}
        </div>
    );
};

export default ItemList;
