import { useState } from 'react';
import style from './ItemCount.module.css';
import { Link } from 'react-router-dom';

function ItemCount({ stock, initial, onAdd }) {
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
		<div className={style.itemContador}>
			<div className={style.contador}>
				<button className={style.btnRestar} onClick={restar}>
					-
				</button>
				<label>{count}</label>

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
						<Link to="/">
							<button className={style.btnSeguir} onClick={agregar}>
								Seguir Comprando
							</button>
						</Link>
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

export default ItemCount;
