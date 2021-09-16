import './App.css';
import ItemDetailContainer from './components/containers/ItemDetailContainer';
import ItemListContainer from './components/containers/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

function App() {
	return (
		<>
			<NavBar />
			<ItemListContainer saludo={'Hola! Aquí va el catalogo de productos.'} />
			<ItemDetailContainer />
		</>
	);
}

export default App;
