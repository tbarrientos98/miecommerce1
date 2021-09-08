import { useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { CarritoContext } from "../../CarritoContext";
import './CartWidget.css';


const CartWidget = () => {

    const { carrito } = useContext(CarritoContext);

    return (
        <div className="CartWidget">
            <Link to="/" className="iconos"><FontAwesomeIcon icon={faWhatsapp} /></Link>
            <Link to="/" className="iconos"><FontAwesomeIcon icon={faInstagram} /></Link>
            <Link to="/" className="iconos"><FontAwesomeIcon icon={faTwitter} /></Link>
            <Link to="/carrito" className="iconos"><FontAwesomeIcon icon={faShoppingCart} />{carrito.length > 0 ? carrito.length : null }</Link>
        </div>
    )
}

export default CartWidget;
