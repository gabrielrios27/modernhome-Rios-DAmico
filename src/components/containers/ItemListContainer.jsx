import style from './ItemListContainer.module.css';
import { useParams } from 'react-router-dom';

import ItemList from '../ItemList/ItemList';
import { useState } from 'react';
import { useEffect } from 'react';
import { getFirestore } from '../../services/getFirebase';

function ItemListContainer(props) {
	const [productos, setProductos] = useState([]);
	const [loading, setLoading] = useState(true);
	const { idCategoria } = useParams();

	useEffect(() => {
		if (idCategoria) {
			const dbQuery = getFirestore();
			dbQuery
				.collection('items')
				.where('categoria', '==', idCategoria)
				.get()
				.then((resp) => {
					setProductos(resp.docs.map((prod) => ({ id: prod.id, ...prod.data() })));
				})
				.catch((error) => console.log(error))
				.finally(() => setLoading(false));
		} else {
			const dbQuery = getFirestore();
			dbQuery
				.collection('items')
				.get()
				.then((resp) => {
					setProductos(resp.docs.map((prod) => ({ id: prod.id, ...prod.data() })));
				})
				.catch((error) => console.log(error))
				.finally(() => setLoading(false));
		}
	}, [idCategoria]);
	return (
		<div className={style.contenedorGral}>
			<h1 className={style.contenidoH1}>{props.saludo}</h1>
			{loading ? <h2>Cargando...</h2> : <ItemList productos={productos} />}
		</div>
	);
}

export default ItemListContainer;
