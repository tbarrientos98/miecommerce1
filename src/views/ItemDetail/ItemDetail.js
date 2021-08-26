import './ItemDetail.css'
import { Card, Image } from 'semantic-ui-react'

const ItemDetail = ({data}) => {

    return (
        <div className="itemDetail">
          <Card className="shadow-lg">
                <Image src={`../../../${data.img}`} alt="Caramelos" wrapped ui={false} />
                <Card.Content className=""
                    header={data.nombre}
                    meta={`Precio:  $${data.precio}`}
                    description={`Descripción: ${data.descripcion}`}
                >
                </Card.Content>
            </Card>
        </div>
    )
}

export default ItemDetail
