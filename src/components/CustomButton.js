import React from "react";
import "./styles/CustomButton.css";

const CustomButton = ({ text, ...props }) => {
	return props.type === "submit" ? (
		<input className="custom-button" {...props} value={text} />
	) : (
		<button className="custom-button" {...props}>
			{text}
		</button>
	);
};

export default CustomButton;
