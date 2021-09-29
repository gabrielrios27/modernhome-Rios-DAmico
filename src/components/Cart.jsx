import React from 'react';
import { useCartContext } from '../context/cartContext';
import style from './Cart.module.css';

function Cart() {
	const { cartList } = useCartContext();
	console.log(cartList);
	return (
		<div>
			{cartList.map((item) => (
				<div className={style.cart}>
					<div className={style.cart__detalle}>
						<h3>Porcelanato {item.item.nombre}</h3>
						<h4>Medida: {item.item.medida}</h4>
						<h4>Cantidad: {item.cantidad} Cajas</h4>
					</div>
					<div className={style.cart__precio}>
						<h3>Precio total</h3>
						<h3>${item.cantidad * item.item.precio}</h3>
					</div>
					<div className={style.cart__eliminar}>
						<h4>X</h4>
					</div>
				</div>
			))}
		</div>
	);
}

export default Cart;
