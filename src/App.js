import './App.css';
// import { useState, createContext } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ItemDetailContainer from './components/containers/ItemDetailContainer';
import ItemListContainer from './components/containers/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import Cart from './components/Cart';
import CartContextProvider from './context/cartContext';

function App() {
	return (
		<>
			<CartContextProvider>
				<BrowserRouter>
					<NavBar />
					<Switch>
						<Route path="/" exact>
							<ItemListContainer saludo={'Hola! Aquí va el catalogo de productos.'} />
						</Route>
						<Route path="/categoria/:idCategoria" component={ItemListContainer} />

						<Route path="/detalle/:id">
							<ItemDetailContainer />
						</Route>
						<Route path="/cart">
							<Cart> </Cart>
						</Route>
					</Switch>
				</BrowserRouter>
			</CartContextProvider>
		</>
	);
}

export default App;
