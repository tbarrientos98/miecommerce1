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
            <div className="container-fluid py-5 cards">
                <ItemCount precio="5" stock="5" initial="2" imagen={flyynPaff} alt="" seVendeEn="unidades" titulo="Caramelos Flynn Paff"/>
                <ItemCount precio="2" stock="3" initial="4" imagen={butterToffee} seVendeEn="unidades" titulo="Caramelos Butter Toffees"/>
                <ItemCount precio="20" stock="10" initial="2" imagen={rhodesia} seVendeEn="unidades" titulo="Rhodesia"/>
            </div>
        </div>
            
    )
}

export default ItemListContainer
