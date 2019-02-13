import React, { Component } from "react";
import CloseButton from "./CloseButton.js";
import "./styles/NavItem.css";

class NavItem extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const lists = this.props.lists;
		const getListToShow = this.props.getListToShow;
		const removeList = this.props.removeList;

		return lists.map(list => (
			<div className="item">
				<span className="item-link" onClick={() => getListToShow(list)}>
					{list.shortListName}
				</span>
				<CloseButton onClick={() => removeList(list)} />
			</div>
		));
	}
}

export default NavItem;
