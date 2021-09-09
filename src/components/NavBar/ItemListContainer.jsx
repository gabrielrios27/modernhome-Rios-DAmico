import ItemCount from '../ItemCount';
import style from './NavBar.module.css';

function ItemListContainer(props) {
	const onAdd = (cant) => {
		console.log(`la cantidad es: ${cant}`);
	};
	return (
		<div className={style.contenedorGral}>
			<h1 className={style.contenidoH1}>{props.saludo}</h1>
			<ItemCount stock={10} initial={1} onAdd={onAdd} />
		</div>
	);
}

export default ItemListContainer;
