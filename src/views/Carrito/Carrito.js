import { useContext, useState } from "react";
import { CarritoContext } from "../../CarritoContext";
import { Table, Image, Button, Form, Message } from "semantic-ui-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './Carrito.css'
import { Formik } from "formik";
import { db } from "../../firebase";
// import Timestamp from "firebase/app";
import firebase from 'firebase/app'
import 'firebase/storage'

const Carrito = () => {
	const { removeCarrito, carrito, totalPrecio, clear} = useContext(CarritoContext);

	const [formularioEnviado, setFormularioEnviado] = useState(false);
	
	const [form, setForm] = useState({
		nombre:"",
		telefono:"",
		email:"",
		items: carrito,
		dia: firebase.firestore.Timestamp.fromDate(new Date()),
		total: ""
	})
	console.log(form)

	const addProducto = async(e) => {

		const object = {
			titulo: "titulo",
			nombre: "nombre",
		}; 
		carrito.forEach(cart => {
		})

		await db.collection('compras').doc().set(object);
		alert("producto agregado");
		e.preventDefault();

		db.collection('compras').onSnapshot((querySnapshot) => {
			querySnapshot.forEach((doc) => {
				// datos.push({...doc.data(), id: doc.id})
				console.log(doc.id)
			})
		})
		setFormularioEnviado(true)
		setTimeout(() => setFormularioEnviado(false) , 5000);
	}

	return (
		<div className="container my-5">
			{carrito.length > 0 
				?
				<div className="row">
					<><h2 style={{ textAlign: "left" }}>Articulos agregados a su carrito</h2>
					<div className="col-8">
						<Table fixed>
							
							<Table.Header className="tabla-carrito">
								<Table.Cell></Table.Cell>
								<Table.Cell>Producto</Table.Cell>
								<Table.Cell>Nombre</Table.Cell>
								<Table.Cell>Descripción</Table.Cell>
								<Table.Cell>Cantidad</Table.Cell>
								<Table.Cell>Precio</Table.Cell>
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
												<Image src={`${cart.img}`}
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
							
						</Table>
					</div></>
					<div className="col-4">
					<Formik
						initialValues={{
							nombre:'',
							email:'',
							telefono: '',
						}}
						validate={(valores) => {
							let errores = {};

							//validacion para el nombre
							if(!valores.nombre){
								errores.nombre = 'Por favor ingresa un nombre'
							}else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)){
								errores.nombre = 'El nombre solo puede contener letras y espacios'
							}

							// validacion para el email
							if(!valores.email){
								errores.email = 'Por favor ingresa un email'
							}else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)){
								errores.email = 'Por favor ingrese un email válido'
							}

							//validacion para numero de telefono
							if(!valores.telefono){
								errores.telefono = 'Por favor ingresa un telefono'
							}else if(!/^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/.test(valores.telefono)){
								errores.telefono = 'Por favor ingrese un telefono válido'
							}
							return errores;
						}}
						// onSubmit={(valores, {resetForm}) => {
						// 	resetForm();
							
							
						// }}
					>
						{({errors, touched, values, handleChange, handleBlur}) => (
							<Form onSubmit={addProducto}>
								<Form.Group>
									<div className="row">
										<div className="col-12 mb-4">
											<Form.Input
												className="labels"
												label='Nombre y apellido'
												placeholder='Juan Carlos'
												name='nombre'
												value={values.nombre}
												onChange={handleChange}
												onBlur={handleBlur}
											/>
											{ touched.nombre && errors.nombre && <div className="form-error">{errors.nombre}</div>}
										</div>
										<div className="col-12 mb-4">
											<Form.Input
												className="labels"
												label='Email'
												placeholder='juanCarlos@gmail.com'
												name='email'
												value={values.email}
												onChange={handleChange}
												onBlur={handleBlur}
											/>
											{ touched.email && errors.email && <div className="form-error">{errors.email}</div>}
										</div>
										<div className="col-12 mb-4">
											<Form.Input
												className="labels"
												label='Teléfono'
												placeholder='1551757695'
												name='telefono'
												value={values.telefono}
												onChange={handleChange}
												onBlur={handleBlur}
											/>
											{ touched.telefono && errors.telefono && <div className="form-error">{errors.telefono}</div>}
										</div>
										<div className="col-12">
											<Form.Button 
											fluid 
											color='orange' 
											content='Enviar' 
											className="mt-3" /* onClick={addProducto} *//>
										</div>
										{formularioEnviado && <Message
											className="mt-3 mensaje-exito"
											success
											header='El formulario ha sido enviado correctamente'
											content='En breves un asistente de ventas se contactará con usted'
										/>}
										
									</div>
								</Form.Group>
							</Form>	
						)}
					</Formik>
					</div>
				</div>
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

// export function fromDate(arg0: Date): any {
// 	throw new Error("Function not implemented.");
// }

