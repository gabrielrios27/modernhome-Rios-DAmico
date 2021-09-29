import { useState } from 'react';
import style from './ItemDetail.module.css';
import ItemCount from '../ItemCount';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/cartContext';
// import { cartContext } from '../../context/cartContext';

function ItemDetail({ item }) {
	// const [cantSelec, setCantSelec] = useState(0);
	const [cambiarBtn, setCambiarBtn] = useState(true);

	const { addToCart } = useCartContext();
	console.log(addToCart);
	const onAdd = (cant) => {
		// setCantSelec(cant);
		console.log(`la cantidad es: ${cant}`);
		setCambiarBtn(false);
		addToCart({ item: item, cantidad: cant });
	};

	return (
		<>
			<div key={item.id} className={style.detalle}>
				<img
					src={`../${item.imagen}`}
					className={style.detalle__img}
					alt="porcelanato simil madera en living"
				/>
				<h4 className={style.detalle__nombre}>Porcelanato {item.nombre}</h4>
				<h5>{item.medida}</h5>
				<h5>Caja: {item.caja}m2</h5>
				<h5 className={style.detalle__precio}>${item.precio} x m2</h5>

				<div>
					{cambiarBtn ? (
						<ItemCount stock={10} initial={1} onAdd={onAdd} />
					) : (
						<div className={style.btnContainer}>
							<Link to="/">
								<button className={style.btnSeguir}>Seguir Comprando</button>
							</Link>
							<Link to="/cart">
								<button className={style.btnTerminar}>Terminar Compra</button>
							</Link>
						</div>
					)}
				</div>
			</div>
		</>
	);
}

export default ItemDetail;
