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
		const { list, updateList} = this.props;
		let listUpdated = list;
		listUpdated.items = [...list.items, this.state.newItem];
		updateList(listUpdated);
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
		const listCopy = this.props.list;
		return !listCopy ? null : (
			<form className="list" onSubmit={this.handleSubmit}>
				<div id="list-title" className="flex-nowrap">
					<h2>{listCopy.listName}</h2>
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
				<TodoItems items={listCopy.items}/>
			</form>
		);
	}
}

export default ListItem;
