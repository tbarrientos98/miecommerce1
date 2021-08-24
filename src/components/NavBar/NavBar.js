import React from 'react';
import logo from "./CANDYBAY2.png";
import "./NavBar.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import {NavDropdown} from 'react-bootstrap'
import CartWidget from '../CartWidget/CartWidget';
// import Productos from '../../views/Productos/Productos';

const NavBar = () => {
	const style = {
		servicios:{
			padding:"16px 0px",
		},
		productos:{
			display:"grid",
			minWidth: "150px"
		}
	};
	return (
		<nav >
			<ul className="NavBar">
				<li><Link to="/">HOME</Link></li>
				<li><Link to="/nosotros">NOSOTROS</Link></li>
				<li style={style.servicios}>
					<NavDropdown title="PRODUCTOS" menuVariant="dark" className="" id="nav-dropdown">
						<div style={style.productos}>
							<Link to="/productos" className="to">Golosinas</Link>
							<Link to="/productos" className="to">Chocolatería</Link>
							<Link to="/productos" className="to">Sucursales</Link>
							<NavDropdown.Divider />
							<Link to="/productos" className="to">Envíos a domicilio</Link>
						</div>
					</NavDropdown>
            	</li>
				<li><Link to="/contacto">CONTACTO</Link></li>
        	</ul>
			<img src={logo} alt="logo de coder" />
			<CartWidget />
		</nav>
	);
}

export default NavBar;
