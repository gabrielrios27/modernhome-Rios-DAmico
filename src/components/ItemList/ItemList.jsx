import React from 'react';
import Item from './Item';

function ItemList({ productos }) {
	return (
		<>
			{productos.map((producto) => (
				<Item producto={producto} />
			))}
		</>
	);
}

export default ItemList;
