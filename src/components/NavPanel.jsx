import React, { Component } from "react";
import NavItem from "./NavItem.jsx";
import CustomButton from "./CustomButton.jsx";
import "./styles/NavPanel.css";

class NavPanel extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<nav className="Nav-panel">
				<CustomButton
					onClick={this.props.togglePopup}
					text="Create ToDo List"
				/>
				<NavItem
					lists={this.props.lists}
					getListToShow={this.props.getListToShow}
					removeList={this.props.removeList}
				/>
			</nav>
		);
	}
}

export default NavPanel;
