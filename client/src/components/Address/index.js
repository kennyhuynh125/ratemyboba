import React from 'react';

export const Address = (props) => (
	<div className="form-group">
		<label htmlFor="Address">{props.name}</label>
		<input type="text" 
			className="form-control"
			id="city" 
			onChange={props.onChange}
			placeholder={props.placeholder} />
	</div>
);

export default Address;