import React from 'react';

export const Ice = (props) => (
	<div className="form-group">
		<label htmlFor="Ice">{props.name}</label>
		<input type="text" 
			className="form-control"
			id="ice" 
			onChange={props.onChange}
			required="required"
			value={props.bobaIce}
			placeholder={props.placeholder} />
	</div>
);

export default Ice;