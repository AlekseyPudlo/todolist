import React from "react";

const ItemsList = (props) => {
	const items = props.items;
	return !items
		? null
		: items.map(item => {
				return (
					<label>
						<input type="checkbox" />
						{item}
					</label>
				);
			});
}


export default ItemsList;
