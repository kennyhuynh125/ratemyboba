import React from 'react';

export const Toppings = (props) => (
	<div className="form-group">
		<label htmlFor="toppings">{props.name}</label>
		<input type="text" 
			className="form-control"
			id="toppings" 
			onChange={props.onChange}
			required="required"
			value={props.bobaToppings}
			placeholder={props.placeholder} />
	</div>
);

export default Toppings;