import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../../services/getFirebase';

import ItemDetail from '../ItemDetail/ItemDetail';

function ItemDetailContainer() {
	const [item, setItem] = useState({});
	const { id } = useParams();
	console.log(`la seleccion es : ${id}`);

	useEffect(() => {
		const db = getFirestore();
		const itemOne = db.collection('items').doc(id);
		console.log(itemOne);
		itemOne
			.get()
			.then((result) => setItem({ id: result.id, ...result.data() }))
			.catch((err) => console.error(err));
		console.log(item);
	}, [id]);
	return (
		<>
			<ItemDetail item={item} />
		</>
	);
}

export default ItemDetailContainer;
