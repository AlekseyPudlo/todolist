import React, { Component } from "react";
import CustomButton from "./CustomButton.jsx";
import CloseButton from "./CloseButton.jsx";
import TextInput from "./TextInput.jsx";
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

	handleSubmit = event => {
		const { listName, keyCounter } = this.state;
		if (event) event.preventDefault();
		!listName
			? alert("The List Name could not be empty!..")
			: this.props.createList({
					listName: listName,
					shortListName: this.shortName(listName),
					key: keyCounter,
					items: []
			  });
		this.setState({
			listName: "",
			keyCounter: keyCounter + 1
		});
	};

	render() {
		const { showPopup } = this.props;
		const { listName } = this.state;
		const title = !listName
			? "a new"
			: this.shortName(listName);

		return !showPopup ? null : (
			<div className="popup">
				<form className="popup-inner" onSubmit={this.handleSubmit}>
					<div className="popup-title">
						<h4>Create {title} list</h4>
						<CloseButton onClick={this.discard} />
					</div>
					<TextInput
						value={listName}
						onChange={this.handleChange}
						type="text"
						placeholder="Type the List name please..."
						maxLength={16}
					/>
					<div className="button-form">
						<CustomButton type="submit" text="Save" />
						<CustomButton onClick={this.discard} text="Discard" />
					</div>
				</form>
			</div>
		);
	}
}

export default Popup;
