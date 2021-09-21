import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFetch } from '../../utils/Mock';
import ItemDetail from '../ItemDetail/ItemDetail';

function ItemDetailContainer() {
	const [item, setItem] = useState({});
	const { id } = useParams();
	useEffect(() => {
		getFetch
			.then((resp) => {
				if (id) {
					const prodfilt = resp.find((item) => item.id === parseInt(id));
					setItem(prodfilt);
				} else {
					setItem(resp);
				}
			})
			.catch((error) => console.log(error));
	}, [id]);
	return (
		<>
			<ItemDetail item={item} />
		</>
	);
}

export default ItemDetailContainer;
