import React from 'react'
import './Item.css'
// import ItemCount from '../ItemCount/ItemCount'
import { Card, Image } from 'semantic-ui-react'

const Item = ({data}) => {

    // console.log(data.img)

    //DECLARANDO HOOK, SET(EL HOOK QUE DECLARO), LO QUE VA DENTRO DE USESTATE ES EL VALOR DEL ESTADO
    return (
        <div className="item">
            <Card className="shadow">
                <Image src={`${data.img}`} alt="Caramelos" wrapped ui={false} />
                <Card.Content className=""
                    header={data.nombre}
                    description={`Precio: $${data.precio}`}
                    meta={`Stock: ${data.stock}`}
                    // description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                    >
                </Card.Content>
                {/* <ItemCount initial={data.cantidad} stock={data.stock} seVendeEn={data.seVendeEn}/> */}
            </Card>
        </div>
    )
}

export default Item
