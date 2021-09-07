import style from './NavBar.module.css';

function ItemListContainer(props) {
	return (
		<div>
			<h1 className={style.contenidoH1}>{props.saludo}</h1>
		</div>
	);
}

export default ItemListContainer;
