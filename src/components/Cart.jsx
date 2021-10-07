import React from 'react';
import { useState } from 'react';
import { useCartContext } from '../context/cartContext';
import style from './Cart.module.css';
import { Link } from 'react-router-dom';
import firebase from 'firebase';
import 'firebase/firestore';
import { getFirestore } from '../services/getFirebase';

// import firebase from 'firebase/app';
// import 'firebase/firestore';

// import {getFirestore} from '../../firebase'
const inatialState = {
	nombre: '',
	email: '',
	tel: '',
};

function Cart() {
	const { cartList, borrarItem, precioTotal } = useCartContext();
	const [formData, setFormData] = useState(inatialState);

	function handleChange(e) {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	}

	function handleSubmit(e) {
		e.preventDefault();
		const newOrder = {
			buyer: formData,
			items: cartList,
			date: firebase.firestore.Timestamp.fromDate(new Date()),
			total: precioTotal(),
		};
		console.log(newOrder);
		const db = getFirestore();
		const orders = db.collection('orders');

		//controlar si hay los productos que quiero agregar
		orders
			.add(newOrder)
			.then((resp) => alert(`la orden de compra es: ${resp.id}`))
			.catch((err) => console.log(err))
			.finally(() => {
				setFormData(inatialState);
				// borrarListado();
			});
	}

	const generarOrden = () => {
		const db = getFirestore();

		const ordersCol = db.collection('orders');

		let orden = {};
		orden.date = firebase.firestore.Timestamp.fromDate(new Date());

		orden.buyer = { name: 'Juan', phone: 'mi telefono', email: 'pepe86@AOL.com.ar' };
		orden.total = precioTotal();
		orden.items = cartList.map((cartItem) => {
			const id = cartItem.item.id;
			const title = cartItem.item.nombre;
			const price = cartItem.item.precio * cartItem.cantidad;

			return { id, title, price };
		});

		console.log(orden);
	};

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
						<form className={style.form} onSubmit={handleSubmit} onChange={handleChange}>
							<h2 className={style.TrabajemosJuntos}>Terminar compra</h2>
							<label className={style.campoInput} for="name">
								<input type="text" id="name" value={formData.nombre} required />
								<span className={style.label}>Nombre</span>
							</label>
							<label className={style.campoInput} for="mail">
								<input type="email" id="mail" value={formData.email} required />
								<span className={style.label}>E-mail</span>
							</label>
							<label className={style.campoInput} for="mail">
								<input type="phone" id="telefono" value={formData.tel} required />
								<span className={style.label}>Telefono</span>
							</label>

							<button className={style.boton} type="submit">
								Pedir Cotización
							</button>
						</form>
						<button onClick={generarOrden} className={style.cart__btnTerminar}>
							Terminar compra
						</button>
					</div>
				</>
			)}
		</div>
	);
}

export default Cart;
