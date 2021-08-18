import './ItemCount.css'
import React/* , { useEffect } */ from 'react'
import { Card, Button } from 'semantic-ui-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faMinus } from '@fortawesome/free-solid-svg-icons'

const ItemCount = (props) => {

    //DECLARANDO HOOK, SET(EL HOOK QUE DECLARO), LO QUE VA DENTRO DE USESTATE ES EL VALOR DEL ESTADO
    const [counter, setCounter] = React.useState(props.initial); 

    const sumarCounter = () => {
        const stock = props.stock;
        if(stock && counter < stock){
            setCounter(Number(counter) + 1);
        }else{
            setCounter(Number(counter) * 1);
        }
    }    
    const restarCounter = () => {
        const stock = props.stock;
        if(stock && counter > 0){
            setCounter(counter - 1);
        }else{
            setCounter(Number(counter) * 1);
        }
    }

    return (
        <div className="Card">
            <Card className="shadow">
                {/* <Image src={props.imagen} alt="asdasd" wrapped ui={false} />
                <Card.Content className=""
                    header={props.titulo}
                    description={`Precio: $${props.precio}`}
                    meta={`Stock:   ${ props.stock}`}
                    >
                </Card.Content> */}
                <Card.Content> 
                    <div className="cantidad">
                        Cantidad: {counter} {props.seVendeEn}
                    </div>
                    <div className='ui two botonesItemCount'>
                        <Button inverted color='green' onClick={sumarCounter}>
                            <FontAwesomeIcon icon={faPlus} />
                        </Button>
                        <Button inverted color='red' onClick={restarCounter}>
                            <FontAwesomeIcon icon={faMinus} />
                        </Button>
                    </div>
                </Card.Content>
            </Card>
        </div>
    )
}

export default ItemCount
