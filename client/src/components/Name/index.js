import React from 'react';

export const Name = (props) => (
	<div class="form-group">
		<label for="name">Drink Name</label>
		<input type="text" 
			className="form-control"
			id="name" 
			onChange={props.onChange}
			placeholder="Milk Tea, Jasmine Green Tea, Salted Cheese Black Tea..." />
	</div>
);

export default Name;