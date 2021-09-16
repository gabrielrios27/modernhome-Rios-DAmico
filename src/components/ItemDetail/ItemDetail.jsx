import React from 'react';
import style from './ItemDetail.module.css';
function ItemDetail({ item }) {
	return (
		<>
			<div key={item.id} className={style.detalle}>
				<img
					src={item.imagen}
					className={style.detalle__img}
					alt="porcelanato simil madera en living"
				/>
				<h4 className={style.detalle__nombre}>Porcelanato {item.nombre}</h4>
				<h5>{item.medida}</h5>
				<h5>Caja: {item.caja}m2</h5>
				<h5 className={style.detalle__precio}>${item.precio} x m2</h5>
			</div>
		</>
	);
}

export default ItemDetail;
