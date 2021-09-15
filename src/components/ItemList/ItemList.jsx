import React from 'react';
import Item from './Item';

function ItemList({ productos, onAdd }) {
	return (
		<>
			{productos.map((producto) => (
				<Item producto={producto} onAdd={onAdd} />
			))}
		</>
	);
}

export default ItemList;
