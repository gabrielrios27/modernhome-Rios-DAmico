import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../../services/getFirebase';

import ItemDetail from '../ItemDetail/ItemDetail';

function ItemDetailContainer() {
	const [item, setItem] = useState({});
	const { id } = useParams();

	useEffect(() => {
		const db = getFirestore();
		const itemOne = db.collection('items').doc(id);
		itemOne
			.get()
			.then((result) => setItem({ id: result.id, ...result.data() }))
			.catch((err) => console.error(err));
	}, [id]);
	return (
		<>
			<ItemDetail item={item} />
		</>
	);
}

export default ItemDetailContainer;
