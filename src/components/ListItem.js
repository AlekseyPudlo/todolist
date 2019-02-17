import React, { Component } from "react";
import ItemsList from "./ItemsList.js";
import CloseButton from "./CloseButton.js";
import CustomButton from "./CustomButton.js";
import TextInput from "./TextInput.js";
import "./styles/ListItem.css";

class ListItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			newItem: "",
		};
	}

	componentDidUpdate(prevProps) {
		// Typical usage (don't forget to compare props):
		if (this.props !== prevProps) {
		  this.setState({
			  newItem: "",
		  })
		}
	  }

	addItem = () => {
		let items = [...this.props.list.items, this.state.newItem];
		let list = this.props.list;
		list.items = items;
		this.props.updateList(list);
	};

	handleChange = event => {
		this.setState({
			newItem: event.target.value
		});
	};

	handleSubmit = event => {
		event.preventDefault();
		this.state.newItem ? this.addItem() : alert("Item cannot be empty!..");
	};

	closeList = () => this.props.getListToShow(null);

	render() {
		const list = this.props.list;
		return !list ? null : (
			<form className="list" onSubmit={this.handleSubmit}>
				<div id="list-title" className="flex-row-nowrap">
					<h2>{list.listName}</h2>
					<CloseButton onClick={this.closeList} />
				</div>
				<div id="add-list-input" className="flex-row-nowrap">
					<TextInput
						value={this.state.newItem}
						onChange={this.handleChange}
						type="text"
						placeholder="Type your task here..."
						maxLength={40}
					/>
					<CustomButton type="submit" text="ADD"/>
				</div>
				<ItemsList items={list.items} />
			</form>
		);
	}
}

export default ListItem;
