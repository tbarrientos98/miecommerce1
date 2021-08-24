import React, { useEffect, useState } from 'react'
import { useParams } from "react-router";
import axios from 'axios'
// import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {

    // console.log(match);
    // let itemId ;/* = match.params.id; */
    const {itemId} = useParams();
    console.log(itemId)
    
    // const [item, setItem] = useState([]);

    useEffect(() => {
        axios(`../../products.json/${itemId}`).then(res=>
            console.log(res.data)
        );
    }, [itemId]);


    return (
        <div>
            hola
        </div>
    )
}

export default ItemDetailContainer
