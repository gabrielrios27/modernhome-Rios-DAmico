import { useState } from 'react';
import style from './ItemCount.module.css';
import piso from '../imagenes/pisos/cleveland.jpg';
function ItemCount({ stock, initial, onAdd }) {
	const [count, setCount] = useState(initial);
	function sumar() {
		if (count < stock) {
			setCount(count + 1);
		}
	}
	function restar() {
		if (count > initial) {
			setCount(count - 1);
		}
	}
	function agregar() {
		onAdd(count);
	}
	return (
		<div className={style.item}>
			<img src={piso} className={style.imgPiso} alt="porcelanato simil madera en living" />
			<h4 className={style.nombrePiso}>Porcelanato Cleveland Taupe 23x120</h4>
			<label>{count}</label>
			<div className={style.contador}>
				<button className={style.btnRestar} onClick={restar}>
					-
				</button>
				<button className={style.btnAgregar} onClick={agregar}>
					Agregar
				</button>
				<button className={style.btnSumar} onClick={sumar}>
					+
				</button>
			</div>
		</div>
	);
}

export default ItemCount;
