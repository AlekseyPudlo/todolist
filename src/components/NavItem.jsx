import React, { Component } from "react";
import CloseButton from "./CloseButton.jsx";
import "./styles/NavItem.css";

class NavItem extends Component {

	render() {
		const {getListToShow, removeList, lists } = this.props;

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
