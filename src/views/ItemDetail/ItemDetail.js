// import React, { useEffect, useState } from 'react'
import './ItemDetail.css'
import { Card, Image } from 'semantic-ui-react'
// import axios from 'axios'

const ItemDetail = ({data}) => {


    return (
        <div className="itemDetail">
          <Card className="shadow-lg">
                <Image src={`../../../${data.img}`} alt="Caramelos" wrapped ui={false} />
                <Card.Content className=""
                    header={data.nombre}
                    meta={`Precio:  $${data.precio}`}
                    description={`Descripción: ${data.descripcion}`}
                    // description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                    >
                </Card.Content>
                {/* <ItemCount initial={data.cantidad} stock={data.stock} seVendeEn={data.seVendeEn}/> */}
            </Card>
        </div>
    )
}

export default ItemDetail
