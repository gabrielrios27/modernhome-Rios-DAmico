import { useEffect, useState } from 'react';
import { getFetchUno } from '../../utils/Mock';
import ItemDetail from '../ItemDetail/ItemDetail';

function ItemDetailContainer() {
	const [item, setItem] = useState({});
	useEffect(() => {
		getFetchUno.then((resp) => setItem(resp));
	}, []);
	return (
		<>
			<ItemDetail item={item} />
		</>
	);
}

export default ItemDetailContainer;
