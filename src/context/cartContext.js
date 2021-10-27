import { useState, createContext, useContext } from 'react';

const cartContext = createContext([]);

export const useCartContext = () => useContext(cartContext);

export default function CartContextProvider({ children }) {
	const [cartList, setCartList] = useState([]);

	function addToCart(item) {
		let CartListAnterior = [...cartList];

		if (CartListAnterior.some((i) => i.item.id === item.item.id)) {
			CartListAnterior.find((i) => i.item.id === item.item.id).cantidad += item.cantidad;
			setCartList(CartListAnterior);
		} else {
			setCartList([...cartList, item]);
		}
	}

	const borrarItem = (product) => {
		let CartListAnterior = [...cartList];
		setCartList(CartListAnterior.filter((i) => i.item.id !== product.item.id));
	};
	const iconCart = () => {
		return cartList.reduce((acum, item) => acum + item.cantidad, 0);
	};
	const precioTotal = () => {
		return cartList.reduce((acum, item) => acum + item.cantidad * item.item.precio, 0);
	};

	function borrarLista() {
		setCartList([]);
	}

	return (
		<cartContext.Provider
			value={{
				cartList,
				addToCart,
				borrarItem,
				iconCart,
				precioTotal,
				borrarLista,
			}}
		>
			{children}
		</cartContext.Provider>
	);
}
