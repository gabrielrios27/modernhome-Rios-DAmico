import { useState } from 'react';
import style from './ItemCount.module.css';
import { Link } from 'react-router-dom';
function ItemCountList({ stock, initial, onAdd }) {
	const [count, setCount] = useState(initial);
	const [cambiarBtn, setCambiarBtn] = useState(true);
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
		setCambiarBtn(false);
	}
	return (
		<div className={style.itemContadorList}>
			<div className={style.contador}>
				<button className={style.btnRestar} onClick={restar}>
					-
				</button>
				<label className={style.contadorLabel}>{count}</label>
				<button className={style.btnSumar} onClick={sumar}>
					+
				</button>
			</div>
			<div>
				{cambiarBtn ? (
					<button className={style.btnAgregar} onClick={agregar}>
						Agregar
					</button>
				) : (
					<div className={style.btnContainer}>
						<button className={style.btnAgregar} onClick={agregar}>
							Agregar +
						</button>
						<Link to="/cart">
							<button className={style.btnTerminar} onClick={agregar}>
								Terminar Compra
							</button>
						</Link>
					</div>
				)}
			</div>
		</div>
	);
}

export default ItemCountList;