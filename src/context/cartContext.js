import { useState, createContext, useContext } from 'react';

const cartContext = createContext([]);

export const useCartContext = () => useContext(cartContext);

export default function CartContextProvider({ children }) {
	const [cartList, setCartList] = useState([]);
	function addToCart(item) {
		setCartList([...cartList, item]);
	}
	function borrarLista() {
		cartList([]);
	}
	function borrarItem(id) {
		// setCartList(cartList.filter(({item}) => item.item.id !== id));
		console.log(`id a eliminar es: ${id}`);
	}

	console.log(cartList);
	return (
		<cartContext.Provider
			value={{
				cartList,
				addToCart,
				borrarLista,
				borrarItem,
			}}
		>
			{children}
		</cartContext.Provider>
	);
}
