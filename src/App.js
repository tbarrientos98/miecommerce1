import "./App.css";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './views/Home/Home'
import Contacto from './views/Contacto/Contacto'
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
					<Route path="/carrito" component={Carrito}></Route>
					<Route path="/nosotros" component={Nosotros}></Route>
					<Route path="/:categoryId" exact component={ItemList}></Route>
					<Route path="/item/:id" component={ItemDetailContainer}></Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
