import React from 'react';
import { useState } from 'react';
import { useCartContext } from '../context/cartContext';
import style from './Cart.module.css';
import { Link } from 'react-router-dom';
import firebase from 'firebase';
import 'firebase/firestore';
import { getFirestore } from '../services/getFirebase';

const inatialState = {
	nombre: '',
	email: '',
	tel: '',
};

function Cart() {
	const [idCompra, setIdCompra] = useState('');
	const [compra, setCompra] = useState(false);
	const { cartList, borrarItem, precioTotal, borrarLista } = useCartContext();
	const [formData, setFormData] = useState(inatialState);

	function handleChange(e) {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
		console.log(formData);
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		let orden = {};

		orden.date = firebase.firestore.Timestamp.fromDate(new Date());

		orden.buyer = formData;

		orden.total = precioTotal();

		orden.items = cartList.map((cartItem) => {
			const id = cartItem.item.id;
			const title = cartItem.item.nombre;
			const price = cartItem.item.precio * cartItem.cantidad;

			return { id, title, price };
		});
		console.log(orden);
		const db = getFirestore();
		db.collection('orders')
			.add(orden)
			.then((resp) => {
				setIdCompra(resp.id);
				setCompra(true);
			})
			.catch((err) => console.log(err))
			.finally(() => {
				setFormData(inatialState);
				borrarLista();
			});

		const itemsToUpdate = db.collection('items').where(
			firebase.firestore.FieldPath.documentId(),
			'in',
			cartList.map((i) => i.item.id)
		);

		const batch = db.batch();

		itemsToUpdate.get().then((collection) => {
			collection.docs.forEach((docSnapshot) => {
				batch.update(docSnapshot.ref, {
					stock:
						docSnapshot.data().stock -
						cartList.find((item) => item.item.id === docSnapshot.id).cantidad,
				});
			});

			batch.commit().then((res) => {
				console.log('resultado batch:', res);
			});
		});
	};

	return (
		<div>
			{cartList.length === 0 ? (
				<>
					{compra ? (
						<div className={style.cart__vacioContainer}>
							<h2 className={style.cart__vacioH2}>A realizado su compra con exito</h2>
							<h3 className={style.cart__vacioH3}>
								El id de su compra es <span>{idCompra}</span>
							</h3>
							<Link to="/">
								<button className={style.cart__vacioBtn}>Ir a Home</button>
							</Link>
						</div>
					) : (
						<div className={style.cart__vacioContainer}>
							<h2 className={style.cart__vacioH2}>Aun no ha elegido un producto</h2>
							<Link to="/">
								<button className={style.cart__vacioBtn}>Ir a Home</button>
							</Link>
						</div>
					)}
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
						<form className={style.form} onChange={handleChange} onSubmit={handleSubmit}>
							<h2 className={style.TrabajemosJuntos}>Terminar compra</h2>
							<label className={style.campoInput} for="name">
								<input type="text" name="nombre" id="name" value={formData.nombre} />
								<span className={style.label}>Nombre</span>
							</label>

							<label className={style.campoInput} for="mail">
								<input type="email" name="email" id="mail" value={formData.email} />
								<span className={style.label}>E-mail</span>
							</label>
							<label className={style.campoInput} for="mail">
								<input type="phone" name="tel" id="telefono" value={formData.tel} required />
								<span className={style.label}>Telefono</span>
							</label>

							<button onSubmit={handleSubmit} className={style.cart__btnTerminar}>
								Terminar compra
							</button>
						</form>
					</div>
				</>
			)}
		</div>
	);
}

export default Cart;
