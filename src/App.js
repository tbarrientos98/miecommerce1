import "./App.css";
import Header from './components/Header/Header';
// import ItemListContainer from './components/ItemListContainer/ItemListContainer';

import Home from './views/Home/Home'
import Contacto from './views/Contacto/Contacto'
import Productos from './views/Productos/Productos'
import Nosotros from './views/Nosotros/Nosotros'
import ItemDetailContainer from "./views/ItemDetailContainer/ItemDetailContainer";

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
	return (
		<Router>
			<div className="App">
				<Header/>
				<Switch>
					<Route path="/" exact component={Home}></Route>
					<Route path="/contacto" component={Contacto}></Route>
					<Route path="/productos" component={Productos}></Route>
					<Route path="/nosotros" component={Nosotros}></Route>
					{/* ES RUTA DINAMICA PORQUE TIENE LOS ":"  */}
					<Route path="/detail/:id" component={ItemDetailContainer}></Route>
				</Switch>
				{/* <ItemListContainer saludo="Hola, Bienvenidos!"/> */}
			</div>
		</Router>
	);
}

export default App;
