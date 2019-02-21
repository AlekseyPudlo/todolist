import React, { Component } from "react";
import "./styles/ItemsList.css";

class ItemsList extends Component {
	constructor(props) {
		super(props);
		this.state = { };
	}

	handleCheckbox = item => {

	}

	render() {
		return (
			<div className="list-items">
				{this.props.items.map(item => {
					return (
						<label className="checkbox-label">
							<input type="checkbox" className="checkbox-custom"/>
							{item.name}
						</label>
					);
				})}
			</div>
		);
	}
}

export default ItemsList;
