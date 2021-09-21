import style from './ItemListContainer.module.css';
import { useParams } from 'react-router-dom';
import { getFetch } from '../../utils/Mock';
import ItemList from '../ItemList/ItemList';
import { useState } from 'react';
import { useEffect } from 'react';

function ItemListContainer(props) {
	const [productos, setProductos] = useState([]);
	const [loading, setLoading] = useState(true);
	const { idCategoria } = useParams();
	console.log(idCategoria);
	const onAdd = (cant) => {
		console.log(`la cantidad es: ${cant}`);
	};
	useEffect(() => {
		if (idCategoria) {
			getFetch
				.then((respuesta) => {
					setProductos(respuesta.filter((prod) => prod.categoria === idCategoria));
				})
				.catch((error) => console.log(error))
				.finally(() => setLoading(false));
		} else {
			getFetch
				.then((respuesta) => {
					setProductos(respuesta);
				})
				.catch((error) => console.log(error))
				.finally(() => setLoading(false));
		}
	}, [idCategoria]);
	return (
		<div className={style.contenedorGral}>
			<h1 className={style.contenidoH1}>{props.saludo}</h1>
			{loading ? <h2>Cargando...</h2> : <ItemList productos={productos} onAdd={onAdd} />}
		</div>
	);
}

export default ItemListContainer;
