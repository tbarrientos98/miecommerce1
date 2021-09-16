import React, { useEffect, useState } from 'react'
import { useParams } from "react-router";
import axios from 'axios';
import ItemDetail from '../../views/ItemDetail/ItemDetail';
import { db } from '../../firebase';

const ItemDetailContainer = () => {

	const { id } = useParams();
	const [item, setItem] = useState([]);
	
	useEffect(() => {
		db.collection('products').onSnapshot((querySnapshot) => {
            const datos = [];
            querySnapshot.forEach((doc) => {
                datos.push({...doc.data(), id: doc.id})
            })
			datos.forEach((item) => {
				if (item.id === id) {
					setItem(item);
				}
			})
        });
	}, [id]);

	return (
		<div className="container">
			<h1 className="detalleItem">Detalle de Item</h1>
			{/* LA PROP {id} TENGO QUE SETEARLA CON CONTEXT PARA PODER USARLA EN ITEMCOUNT */}
			<ItemDetail item={item} id={id}/>
		</div>
	)
}

export default ItemDetailContainer
