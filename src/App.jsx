import React, { Component } from "react";
import "./App.css";
import NavPanel from "./components/NavPanel.jsx";
import ListItem from "./components/ListItem.jsx";
import Popup from "./components/Popup.jsx";

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
		const { lists, showPopup } = this.state;
		lists.some(stateList => stateList.listName === newList.listName)
			? alert('There is the element with "' + newList.listName + '" name.')
			: this.setState({
					lists: [...lists, newList],
					showPopup: !showPopup,
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
		/* Here we make filter all listst where key value is not like
		 in list should be removed, because key is the unic id and there
		 is no more the same key value in another list*/
		this.setState(prevState => {
			const lists = prevState.lists.filter(
				list => list.key !== listToRemove.key
			);
			/* At the same time we shell set new list to render
			before return new state, if there removed list rendering we render null */
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
		const { lists, listToRender, showPopup } = this.state;
		return (
			<div className="App">
				<NavPanel
					getListToShow={this.getListToShow}
					removeList={this.removeList}
					togglePopup={this.togglePopup}
					lists={lists}
				/>
				<ListItem
					list={listToRender}
					getListToShow={this.getListToShow}
					updateList={this.updateList}
				/>
				<Popup
					showPopup={showPopup}
					togglePopup={this.togglePopup}
					createList={this.createList}
				/>
			</div>
		);
	}
}

export default App;
