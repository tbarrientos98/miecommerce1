import React from 'react';
import "./NavBar.css";
import logo from "./coderhouse-logo.png";
// import Button from '@material-ui/core/Button';
// import Menu from '@material-ui/core/Menu';
// import MenuItem from '@material-ui/core/MenuItem';
import {NavDropdown} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';



const NavBar = () => {

	const style = {
		servicios:{
			padding:"1.9vh"

		}
	};
	return (
		<nav>
			<img src={logo} alt="logo de coder" />
			<ul>
				<li><a href="#">HOME</a></li>
				<li><a href="/">PROYECTOS</a></li>
				<li style={style.servicios}>
					<NavDropdown title="SERVICIOS" className="nav-dropdown" id="nav-dropdown">
						<NavDropdown.Item eventKey="4.1">Diseños de páginas web para empresas, profesionales y emprendedores.</NavDropdown.Item>
						<NavDropdown.Item eventKey="4.2">Diseño responsive</NavDropdown.Item>
						<NavDropdown.Item eventKey="4.3">Servicio de hosting</NavDropdown.Item>
						<NavDropdown.Divider />
						<NavDropdown.Item eventKey="4.4">CURSOS</NavDropdown.Item>
					</NavDropdown>
            </li>


			<li><a href="/">CONTACTO</a></li>
        </ul>
    </nav>
	);
}

export default NavBar
