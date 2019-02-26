import React, { Component } from "react";
import Checkbox from "./Checkbox";
import "./styles/TodoItems.css";

class TodoItems extends Component {
	constructor(props) {
		super(props);
		this.state = {
			checkedItems: new Map()
		};
	}

	handleChange = event => {
		const item = event.target.name;
		const isChecked = event.target.checked;
		this.setState(prevState => ({
			checkedItems: prevState.checkedItems.set(item, isChecked)
		}));
	}

	render() {
		return (
			<React.Fragment>
				{this.props.items.map(element => (
					<label key={element.key}>
						<Checkbox
							name={element.name}
							checked={this.state.checkedItems.get(element.name)}
							onChange={this.handleChange}
						/>
						{element.name}
					</label>
				))}
			</React.Fragment>
		);
	}
}

export default TodoItems;
