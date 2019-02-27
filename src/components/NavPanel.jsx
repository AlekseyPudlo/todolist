import React, { Component } from "react";
import NavItem from "./NavItem.jsx";
import CustomButton from "./CustomButton.jsx";
import "./styles/NavPanel.css";

class NavPanel extends Component {

	render() {
		const { getListToShow, removeList, togglePopup, lists } = this.props;
		return (
			<nav className="Nav-panel">
				<CustomButton onClick={togglePopup} text="Create ToDo List" />
				<NavItem
					lists={lists}
					getListToShow={getListToShow}
					removeList={removeList}
				/>
			</nav>
		);
	}
}

export default NavPanel;
