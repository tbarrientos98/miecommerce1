import './ItemCount.css'
import { Card, Button, Image } from 'semantic-ui-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faMinus } from '@fortawesome/free-solid-svg-icons'

const ItemCount = (props) => {
    return (
        <div className="Card">
            <Card>
                <Image src={props.imagen} alt="asdasd" wrapped ui={false} />
                <Card.Content
                    // image='flyynPaff.jpg'
                    // img={props.imagen}
                    header={props.titulo}
                    meta='Friend'
                    // description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                >
                </Card.Content>
                <Card.Content> 
                    <div className="cantidad">
                        Cantidad: {props.cantidad} {props.seVendeEn}
                    </div>
                    <div className='ui two buttons'>
                        <Button basic color='blue'>
                            <FontAwesomeIcon icon={faPlus} />
                        </Button>
                        <Button basic color='red'>
                            <FontAwesomeIcon icon={faMinus} />
                        </Button>
                    </div>
                </Card.Content>
            </Card>
        </div>
    )
}

export default ItemCount
