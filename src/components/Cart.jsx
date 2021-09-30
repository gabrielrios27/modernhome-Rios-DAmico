import React from 'react';
import { useCartContext } from '../context/cartContext';
import style from './Cart.module.css';
import { Link } from 'react-router-dom';

function Cart() {
	const { cartList, borrarItem, precioTotal } = useCartContext();
	console.log(cartList);
	return (
		<div>
			{cartList.length === 0 ? (
				<>
					<div className={style.cart__vacioContainer}>
						<h2 className={style.cart__vacioH2}>Aun no ha elegido un producto</h2>
						<Link to="/">
							<button className={style.cart__vacioBtn}>Ir a Home</button>
						</Link>
					</div>
				</>
			) : (
				<>
					{cartList.map((item) => (
						<div key={item.id} className={style.cart}>
							<div className={style.cart__detalle}>
								<h3>Porcelanato {item.item.nombre}</h3>
								<h4>Medida: {item.item.medida}</h4>
								<h4>Cantidad: {item.cantidad} Cajas</h4>
							</div>
							<div className={style.cart__precio}>
								<h3>Precio</h3>
								<h3>${item.cantidad * item.item.precio}</h3>
							</div>
							<button className={style.cart__eliminar} onClick={() => borrarItem(item)}>
								<h4>X</h4>
							</button>
						</div>
					))}
					<div className={style.cart__containerPrecioBtn}>
						<div className={style.cart__precioTotal}>
							<h3>Total: ${precioTotal()}</h3>
						</div>
						<button className={style.cart__btnTerminar}>Terminar compra</button>
					</div>
				</>
			)}
		</div>
	);
}

export default Cart;
