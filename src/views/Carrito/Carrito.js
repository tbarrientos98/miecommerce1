import { useContext } from "react";
import { CarritoContext } from "../../CarritoContext";
import { Table, Image, Button } from "semantic-ui-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './Carrito.css'

const Carrito = () => {
	const { removeCarrito, carrito, totalPrecio, clear} = useContext(CarritoContext);

	return (
		<div className="container my-5">
			{carrito.length > 0 
				?
					<><h2 style={{ textAlign: "left" }}>Articulos agregados a su carrito</h2><Table fixed>
					<Table.Header className="tabla-carrito">
						<Table.HeaderCell></Table.HeaderCell>
						<Table.HeaderCell>Producto</Table.HeaderCell>
						<Table.HeaderCell>Nombre</Table.HeaderCell>
						<Table.HeaderCell>Description</Table.HeaderCell>
						<Table.HeaderCell>Cantidad</Table.HeaderCell>
						<Table.HeaderCell>Precio</Table.HeaderCell>
					</Table.Header>
					{carrito.map((cart) => {
						return (
							<Table.Body key={cart.id}>
								<Table.Row className="tabla-carrito">
									<Table.Cell className="td-carrito">
										<Button onClick={() => removeCarrito(cart.id)}>
											<FontAwesomeIcon className="icon-carrito" icon={faTrash} />
										</Button>
									</Table.Cell>
									<Table.Cell className="td-carrito">
										<Image src={`../../../${cart.img}`}
											alt="Caramelos" className="imagen-carrito" />
									</Table.Cell>
									<Table.Cell className="td-carrito">{cart.nombre}</Table.Cell>
									<Table.Cell className="td-carrito">{cart.descripcion}</Table.Cell>
									<Table.Cell className="td-carrito">{cart.cant}</Table.Cell>
									<Table.Cell className="td-carrito">$ {cart.precio * cart.cant}</Table.Cell>
								</Table.Row>
							</Table.Body>
						);
					})}
					<Table.Footer className="tabla-carrito">
						<Table.HeaderCell><Button color='red' onClick={()=>clear()}>Vaciar carrito</Button></Table.HeaderCell>
						<Table.HeaderCell />
						<Table.HeaderCell />
						<Table.HeaderCell />
						<Table.HeaderCell />
						<Table.HeaderCell>TOTAL:{totalPrecio()}</Table.HeaderCell>
					</Table.Footer>
					
				</Table></>
				:
				<>
					<h3>No hay productos en tu carrito</h3>
					<Link to="/" inverted color='orange'>Volver al home</Link>
				</>
			}
			
		</div>
	);
};

export default Carrito;
