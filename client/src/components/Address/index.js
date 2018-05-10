import React from 'react';

export const Address = (props) => (
	<div class="form-group">
		<label for="Address">{props.name}</label>
		<input type="text" 
			className="form-control"
			id="city" 
			onChange={props.onChange}
			placeholder={props.placeholder} />
	</div>
);

export default Address;