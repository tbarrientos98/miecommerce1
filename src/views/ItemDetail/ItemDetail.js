import "./ItemDetail.css";
import { Card, Image, Button, Icon } from "semantic-ui-react";
import ItemCount from "../../components/ItemCount/ItemCount";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//ESTAS PROPS VIENEN DE ITEMDETAILCONTAINER
const ItemDetail = ({ item, id }) => {

	const [terminarCompra, setTerminarCompra] = useState(false);
	const [cant, setCant] = useState(0);

	const ondAdd = (cant) => {
		setCant(cant);
	}

	useEffect(() => {
		if(cant !== undefined && cant !== 0){
			setTerminarCompra(true)
			console.log(cant)
		}
	}, [cant])

	return (
		<div className="itemDetail">
			<Card className="shadow-lg">
				<Image
					src={`../../../${item.img}`}
					alt="Caramelos"
					wrapped
					ui={false}
				/>
				<Card.Content className="" header={item.nombre} meta={`Precio:  $${item.precio}`}
					description={`Descripción: ${item.descripcion}`}
				></Card.Content>
			
				{terminarCompra 
					?<Link to="/carrito">
						<Button animated className="terminarCompra">
							<Button.Content visible>Terminar Compra</Button.Content>
							<Button.Content hidden>
								<Icon name='arrow right' />
							</Button.Content>
						</Button>
					</Link>
					:<ItemCount
						id={id}
						initial={1}
						stock={item.stock}
						seVendeEn={item.seVendeEn}
						ondAdd={ondAdd}
					/>
				}
			</Card>
		</div>
	);
};

export default ItemDetail;
