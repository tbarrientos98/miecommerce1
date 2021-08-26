import React from 'react';
import './CartWidget.css';
// import {FontAwesomeIcon} from 'semantic-ui-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';


const CartWidget = () => {
    return (
        <div className="CartWidget">
            <Link to="/" className="iconos"><FontAwesomeIcon icon={faWhatsapp} /></Link>
            <Link to="/" className="iconos"><FontAwesomeIcon icon={faInstagram} /></Link>
            <Link to="/" className="iconos"><FontAwesomeIcon icon={faTwitter} /></Link>
            <Link to="/carrito" className="iconos"><FontAwesomeIcon icon={faShoppingCart} /></Link>
        </div>
    )
}

export default CartWidget;
