import { useState } from 'react';
import style from './ItemDetail.module.css';
import ItemCount from '../ItemCount';

function ItemDetail({ item }) {
	const [cantSelec, setCantSelec] = useState(0);
	const onAdd = (cant) => {
		console.log(`la cantidad es: ${cant}`);
		setCantSelec(cant);
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
				<ItemCount stock={10} initial={1} onAdd={onAdd} />
			</div>
		</>
	);
}

export default ItemDetail;
