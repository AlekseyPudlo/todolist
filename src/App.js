import React, { Component } from "react";
import "./App.css";
import NavPanel from "./components/NavPanel.js";
import ListItem from "./components/ListItem.js";
import Popup from "./components/Popup.js";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			lists: [],
			showPopup: false,
			listToRender: null
		};
	}

	togglePopup = () => {
		this.setState({ showPopup: !this.state.showPopup });
	};

	createList = newList => {
		this.state.lists.some(stateList => stateList.listName === newList.listName)
			? alert('There is the element with "' + newList.listName + '" name.')
			: this.setState({
					lists: [...this.state.lists, newList],
					showPopup: !this.state.showPopup,
					listToRender: newList
			  });
	};

	updateList = list => {
		const lists = [
			...this.state.lists.filter(element => element.key !== list.key),
			list
		];
		this.setState({
			lists
		});
	};

	getListToShow = list => {
		this.setState({
			listToRender: list
		});
	};

	removeList = listToRemove => {
		this.setState(prevState => {
			const lists = prevState.lists.filter(
				list => list.key !== listToRemove.key
			);
			const listToRender =
				!prevState.listToRender ||
				prevState.listToRender.key === listToRemove.key
					? null
					: prevState.listToRender;
			return {
				lists,
				listToRender
			};
		});
	};

	render() {
		return (
			<div className="App">
				<NavPanel
					getListToShow={this.getListToShow}
					removeList={this.removeList}
					togglePopup={this.togglePopup}
					lists={this.state.lists}
					shortListName={this.shortListName}
				/>
				<ListItem
					list={this.state.listToRender}
					getListToShow={this.getListToShow}
					updateList={this.updateList}
				/>
				<Popup
					showPopup={this.state.showPopup}
					togglePopup={this.togglePopup}
					createList={this.createList}
				/>
			</div>
		);
	}
}

export default App;
