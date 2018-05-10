import React from 'react';

export const Toppings = (props) => (
	<div class="form-group">
		<label for="toppings">{props.name}</label>
		<input type="text" 
			className="form-control"
			id="toppings" 
			onChange={props.onChange}
			required="required" 
			placeholder={props.placeholder} />
	</div>
);

export default Toppings;