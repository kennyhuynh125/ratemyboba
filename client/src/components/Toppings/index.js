import React from 'react';

export const Toppings = (props) => (
	<div class="form-group">
		<label for="toppings">Toppings</label>
		<input type="text" 
			className="form-control"
			id="toppings" 
			onChange={props.onChange}
			required="required" 
			placeholder="Boba, grass jelly, lychee jelly..." />
	</div>
);

export default Toppings;