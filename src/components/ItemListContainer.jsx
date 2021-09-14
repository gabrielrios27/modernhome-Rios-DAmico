import ItemCount from './ItemCount';
import style from './ItemListContainer.module.css';
import { getFetch } from '../utils/Mock';

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
			{loading ? <h2>Cargando...</h2> : <ItemList productos={productos} />}
			<ItemCount stock={10} initial={1} onAdd={onAdd} />
		</div>
	);
}

export default ItemListContainer;
