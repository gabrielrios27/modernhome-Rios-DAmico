import React from 'react';
import ItemCount from '../ItemCount';
import style from '../ItemCount.module.css';

function Item({ producto, onAdd }) {
	return (
		<div key={producto.id} className={style.item}>
			<img
				src={producto.imagen}
				className={style.imgPiso}
				alt="porcelanato simil madera en living"
			/>
			<h4 className={style.nombrePiso}>Porcelanato: {producto.nombre}</h4>
			<h5>{producto.medida}</h5>
			<ItemCount stock={10} initial={1} onAdd={onAdd} />
			<div>
				<button>Detalles</button>
			</div>
		</div>
	);
}

export default Item;
