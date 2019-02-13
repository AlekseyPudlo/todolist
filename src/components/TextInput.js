import React from "react";
import "./styles/TextInput.css";

const TextInput = props => {
	return <input {...props} className="text-input" autoFocus={true} />;
};

export default TextInput;
