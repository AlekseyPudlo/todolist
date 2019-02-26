import React, { Component } from "react";
import TodoItems from "./TodoItems.jsx";
import CloseButton from "./CloseButton.jsx";
import CustomButton from "./CustomButton.jsx";
import TextInput from "./TextInput.jsx";
import "./styles/ListItem.css";

class ListItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			newItem: {
				name: "",
				isChecked: false
			}
		};
	}

	componentDidUpdate(prevProps) {
		// Typical usage (don't forget to compare props):
		if (this.props !== prevProps) {
			this.setState({
				newItem: {
					name: "",
					isChecked: false
				}
			});
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
			newItem: {
				name: event.target.value,
				isChecked: false,
			},
		});
	};

	handleSubmit = event => {
		event.preventDefault();
		this.state.newItem.name
			? this.addItem()
			: alert("Items Name cannot be empty!..");
	};

	closeList = () => this.props.getListToShow(null);

	render() {
		const list = this.props.list;
		return !list ? null : (
			<form className="list" onSubmit={this.handleSubmit}>
				<div id="list-title" className="flex-nowrap">
					<h2>{list.listName}</h2>
					<CloseButton onClick={this.closeList} />
				</div>
				<div id="add-list-input">
					<TextInput
						value={this.state.newItem.name}
						onChange={this.handleChange}
						type="text"
						placeholder="Type your task here..."
						maxLength={40}
					/>
					<CustomButton type="submit" text="ADD" />
				</div>
				<TodoItems items={list.items}/>
			</form>
		);
	}
}

export default ListItem;
