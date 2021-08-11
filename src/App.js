import "./App.css";
import Header from './components/Header/Header';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
	return (
		<div className="App">
			<Header/>
			<ItemListContainer saludo="Hola, Bienvenidos a Candybay!"/>
		</div>
	);
}

export default App;
