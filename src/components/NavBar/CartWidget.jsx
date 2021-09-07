import style from './NavBar.module.css';
import carrito from '../../imagenes/carrito.png';

function CartWidget() {
	return (
		<>
			<div>
				<img src={carrito} alt="carrito" className={style.carrito} />
			</div>
		</>
	);
}

export default CartWidget;
