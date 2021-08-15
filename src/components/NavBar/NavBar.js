import React from 'react';
import logo from "./CANDYBAY2.png";
import {NavDropdown} from 'react-bootstrap'
import "./NavBar.css";
import CartWidget from '../CartWidget/CartWidget';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
	const style = {
		servicios:{
			padding:"16px 0px"
		}
	};
	return (
		<nav >
			<ul className="NavBar">
				<li><a href="/">HOME</a></li>
				<li><a href="/">NOSOTROS</a></li>
				<li style={style.servicios}>
					<NavDropdown title="PRODUCTOS" menuVariant="dark" className="" id="nav-dropdown">
						<NavDropdown.Item eventKey="4.1">Golosinas</NavDropdown.Item>
						<NavDropdown.Item eventKey="4.2">Chocolatería</NavDropdown.Item>
						<NavDropdown.Item eventKey="4.3">Sucursales</NavDropdown.Item>
						<NavDropdown.Divider />
						<NavDropdown.Item eventKey="4.4">Envíos a domicilio</NavDropdown.Item>
					</NavDropdown>
            	</li>
				<li><a href="/">CONTACTO</a></li>
        	</ul>
			<img src={logo} alt="logo de coder" />
			<CartWidget />
		</nav>
	);
}

export default NavBar;
