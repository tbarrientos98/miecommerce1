import "./App.css";
import Header from './components/Header/Header';
// import ItemListContainer from './components/ItemListContainer/ItemListContainer';

import Home from './views/Home/Home'
import Contacto from './views/Contacto/Contacto'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Nosotros from './views/Nosotros/Nosotros'
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Carrito from "./views/Carrito/Carrito";
import ItemList from "./components/ItemList/ItemList";

function App() {
	return (
		<Router>
			<div className="App">
				<Header/>
				<Switch>
					<Route path="/" exact component={Home}></Route>
					<Route path="/contacto" component={Contacto}></Route>
					<Route path="/:categoryId" exact component={ItemList}></Route>
					<Route path="/nosotros" component={Nosotros}></Route>
					{/* ES RUTA DINAMICA PORQUE TIENE LOS ":"  */}
					<Route path="/item/:id" component={ItemDetailContainer}></Route>
					<Route path="/carrito" component={Carrito}></Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
