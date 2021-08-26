import React from 'react';
import logo from "./CANDYBAY2.png";
import "./NavBar.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import {NavDropdown} from 'react-bootstrap'
import CartWidget from '../CartWidget/CartWidget';
// import axios from 'axios';
// import { useState } from 'react';
// import { useEffect } from 'react';

const NavBar = () => {
	const style = {
		servicios:{
			padding:"19px 0px",
		},
		productos:{
			display:"grid",
			minWidth: "150px"
		}
	};

	/* const [categorias, setCategorias] = useState([])
	console.log(categorias)
	useEffect(() => {
        axios('../../products.json')
        .then(res => setCategorias(res.data));
    }, []); */

	const categorias = [
		{
			"id":"golosina",
			"nombre": "Golosina"
		},
		{
			"id":"chocolate",
			"nombre":"Chocolatería"
		},
	];

	return (
		<nav >
			<ul className="NavBar">
				<li><Link to="/">HOME</Link></li>
				<li><Link to="/nosotros">NOSOTROS</Link></li>
				<li style={style.servicios}>
					<NavDropdown title="PRODUCTOS" menuVariant="dark" className="" id="nav-dropdown">
						<div style={style.productos}>
							{categorias.map((categoria) => (
								<Link key={categoria.id} className="linkCategoria" to={`/${categoria.id}`}>{categoria.nombre}</Link>
							))}
							<Link to="/" className="linkCategoria">Sucursales</Link>
							<NavDropdown.Divider />
							<Link to="/" className="linkCategoria">Envíos a domicilio</Link>
						</div>
					</NavDropdown>
            	</li>
				<li><Link to="/contacto">CONTACTO</Link></li>
        	</ul>
			<Link to="/"><img src={logo} alt="logo de coder" /></Link>
			<CartWidget />
		</nav>
	);
}

export default NavBar;
