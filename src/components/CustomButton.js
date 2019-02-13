import React from "react";
import "./styles/CustomButton.css";

const CustomButton = ({ text, ...props }) => {
	return (
		<button className="custom-button" {...props}>
			{text}
		</button>
	);
};

export default CustomButton;
