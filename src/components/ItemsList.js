import React, { Component } from "react";

class ItemsList extends Component {
	constructor(props) {
		super(props);
		this.state = { };
	}

	render() {
		return (
			<div className="list ">
				{this.props.items.map(item => {
					return (
						<label>
							<input type="checkbox" />
							{item.name}
						</label>
					);
				})}
			</div>
		);
	}
}

export default ItemsList;
