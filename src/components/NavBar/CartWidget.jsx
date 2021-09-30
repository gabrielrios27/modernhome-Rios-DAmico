import style from './NavBar.module.css';
import carrito from '../../imagenes/carrito.png';
import { useCartContext } from '../../context/cartContext';

function CartWidget() {
	const { cartList, iconCart } = useCartContext();
	return (
		<>
			{cartList.length === 0 ? (
				<div>
					<img src={carrito} alt="carrito" className={style.carrito} />
				</div>
			) : (
				<div className={style.carrito__container}>
					<img src={carrito} alt="carrito" className={style.carrito} />
					<span className={style.carrito__contador}>{iconCart()}</span>
				</div>
			)}
		</>
	);
}

export default CartWidget;
