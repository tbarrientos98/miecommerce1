import React from 'react'
import './ItemListContainer.css'

const ItemListContainer = (props) => {
    return (
        <div className="ItemListContainer">
            <h1>{props.saludo}</h1>
        </div>
    )
}

export default ItemListContainer
