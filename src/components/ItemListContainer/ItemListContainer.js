import React from 'react'
import './ItemListContainer.css'
import ItemCount from '../ItemCount/ItemCount'
import flyynPaff from '../ItemCount/flyynPaff.jpg'
import butterToffee from '../ItemCount/butterToffee.jpg'
import rhodesia from '../ItemCount/rhodesia.jpg'

const ItemListContainer = (props) => {
    return (
        <div>
            <div className="ItemListContainer">
                <h1>{props.saludo}</h1>
            </div>
            <div className="container cards">
                <ItemCount imagen={flyynPaff} alt="" seVendeEn="gr" cantidad="0" titulo="Caramelos Flynn Paff"/>
                <ItemCount imagen={butterToffee} seVendeEn="gr" cantidad="0" titulo="Caramelos Butter Toffees"/>
                <ItemCount imagen={rhodesia} seVendeEn="unidades" cantidad="0" titulo="Rhodesia"/>
            </div>
        </div>
            
    )
}

export default ItemListContainer
