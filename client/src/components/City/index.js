import React from 'react';

export const City = (props) => (
	<div class="form-group">
		<label for="city">{props.name}</label>
		<input type="text" 
			className="form-control"
			id="city" 
			onChange={props.onChange}
			placeholder={props.placeholder} />
	</div>
);

export default City;