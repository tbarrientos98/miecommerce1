import React from 'react';
import './CartWidget.css';
// import {FontAwesomeIcon} from 'semantic-ui-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'


const CartWidget = () => {
    return (
        <div className="CartWidget">
            <a href="/" className="iconos"><FontAwesomeIcon icon={faWhatsapp} /></a>
            <a href="/" className="iconos"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="/" className="iconos"><FontAwesomeIcon icon={faTwitter} /></a>
        </div>
    )
}

export default CartWidget;
