import React from 'react';

export const State = (props) => (
	<div className="form-group">
		<label htmlFor="state">{props.name}</label>
		<input type="text" 
			className="form-control"
			id="city" 
			onChange={props.onChange}
			placeholder={props.placeholder} />
	</div>
);

export default State;