import './ItemCount.css'
import React, { useState } from 'react'
import { Card, Button, Icon } from 'semantic-ui-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faMinus } from '@fortawesome/free-solid-svg-icons'

const ItemCount = ({initial, stock, seVendeEn, id, ondAdd}) => {

    //DECLARANDO HOOK, SET(EL HOOK QUE DECLARO), LO QUE VA DENTRO DE USESTATE ES EL VALOR DEL ESTADO
    const [counter, setCounter] = useState(initial);

    const sumarCounter = () => {    
        if(stock && counter < stock){
            setCounter(Number(counter) + 1);
        }else{
            setCounter(counter * 1);
        }
    }    
    const restarCounter = () => {
        if(stock && counter > 0){
            setCounter(counter - 1);
        }else{
            setCounter(counter * 1);
        }
    }

    return (
        <div className="Card">
            <Card className="shadow">
                <Card.Content> 
                    <div className="cantidad">
                        {/* {console.log(counter)} */}
                        Cantidad: {counter} {seVendeEn}
                    </div>
                    <div className='ui two botonesItemCount'>
                        <Button inverted color='green' onClick={sumarCounter}>
                            <FontAwesomeIcon icon={faPlus} />
                        </Button>
                        {id !== undefined 
                        ?   <Button animated='vertical' 
                                className="agregarCarrito" 
                                onClick={() => ondAdd(counter)}>
                                <Button.Content hidden>Agregar al carrito</Button.Content>
                                <Button.Content visible>
                                    <Icon name='shop' />
                                </Button.Content>
                            </Button>
                        : ''
                        }
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
