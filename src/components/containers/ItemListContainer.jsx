import style from './ItemListContainer.module.css';
import { getFetch } from '../../utils/Mock';
import ItemList from '../ItemList/ItemList';
import { useState } from 'react';
import { useEffect } from 'react';

function ItemListContainer(props) {
	const [productos, setProductos] = useState([]);
	const [loading, setLoading] = useState(true);

	const onAdd = (cant) => {
		console.log(`la cantidad es: ${cant}`);
	};
	useEffect(() => {
		getFetch
			.then((respuesta) => {
				setProductos(respuesta);
			})
			.catch((error) => console.log(error))
			.finally(() => setLoading(false));
	}, []);
	return (
		<div className={style.contenedorGral}>
			<h1 className={style.contenidoH1}>{props.saludo}</h1>
			{loading ? <h2>Cargando...</h2> : <ItemList productos={productos} onAdd={onAdd} />}
		</div>
	);
}

export default ItemListContainer;
