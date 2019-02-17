import React, { Component } from "react";
import CustomButton from "./CustomButton.js";
import CloseButton from "./CloseButton.js";
import TextInput from "./TextInput.js";
import "./styles/Popup.css";

class Popup extends Component {
	constructor(props) {
		super(props);
		this.state = {
			listName: "",
			keyCounter: 0
		};
	}

	shortName = name => {
		return name.length > 9 ? name.slice(0, 9).concat("...") : name;
	};

	discard = () => {
		this.props.togglePopup();
		this.setState({
			listName: ""
		});
	};

	handleChange = event => {
		this.setState({
			listName: event.target.value
		});
	};

	handleClick = () => {
		!this.state.listName
			? alert("The List Name could not be empty!..")
			: this.props.createList({
					listName: this.state.listName,
					shortListName: this.shortName(this.state.listName),
					key: this.state.keyCounter,
					items: []
			  });
		this.setState({
			listName: "",
			keyCounter: this.state.keyCounter + 1
		});
	};

	handleSubmit = event => {
		event.preventDefault();
		this.handleClick();
	};

	render() {
		const showPopup = this.props.showPopup;
		const title = !this.state.listName
			? "a new"
			: this.shortName(this.state.listName);

		return !showPopup ? null : (
			<div className="popup">
				<form className="popup-inner" onSubmit={this.handleSubmit}>
					<div className="popup-title">
						<h4>Create {title} list</h4>
						<CloseButton onClick={this.discard} />
					</div>
					<TextInput
						value={this.state.listName}
						onChange={this.handleChange}
						type="text"
						placeholder="Type the List name please..."
						maxLength={16}
					/>
					<div className="button-form">
						<CustomButton onClick={this.discard} text="Discard" />
						<CustomButton onClick={this.handleClick} text="Save" />
					</div>
				</form>
			</div>
		);
	}
}

export default Popup;
