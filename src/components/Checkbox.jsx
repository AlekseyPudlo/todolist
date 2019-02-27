import React from "react";
import PropTypes from "prop-types";

const Checkbox = ({ type = "checkbox", props }) => (
	<input type={type} {...props} />
);

Checkbox.propTypes = {
	type: PropTypes.string,
	name: PropTypes.string.isRequired,
	checked: PropTypes.bool,
	onChange: PropTypes.func.isRequired
};

export default Checkbox;
