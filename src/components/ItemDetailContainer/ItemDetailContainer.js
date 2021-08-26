import React, { useEffect, useState } from 'react'
import { useParams } from "react-router";
import axios from 'axios';
import ItemDetail from '../../views/ItemDetail/ItemDetail';

const ItemDetailContainer = () => {

	const { id } = useParams();
	const [item, setItem] = useState([]);
	useEffect(() => {
		axios(`../../products.json`).then(res =>
			res.data.forEach((item) => {
				if (item.id === id) {
					setItem(item);
				}
			})
		);
	}, [id]);

	return (
		<div className="container">
			<h1 className="detalleItem">Detalle de Item</h1>
			<ItemDetail data={item} />
		</div>
	)
}

export default ItemDetailContainer
