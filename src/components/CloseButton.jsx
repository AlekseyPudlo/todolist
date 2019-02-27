import React, { Component } from "react";
import "./styles/CloseButton.css";

const CloseButton = ({onClick}) => {
	return (
		<button type="button" className="close" onClick={onClick}>
			&times;
		</button>
	);
};

export default CloseButton;
