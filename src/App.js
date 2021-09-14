import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

function App() {
	return (
		<>
			<NavBar />
			<ItemListContainer saludo={'Hola! Aquí va el catalogo de productos.'} />
		</>
	);
}

export default App;
