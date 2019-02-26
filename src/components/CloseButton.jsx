import React, {Component} from "react"
import "./styles/CloseButton.css"


class CloseButton extends Component {
	
	render() {
		return (
			<button
				type="button"
				className="close"
				onClick={this.props.onClick}
			>
				&times;
			</button>
		)
	}
}

export default CloseButton;