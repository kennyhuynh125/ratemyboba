import React from 'react';

export const Name = (props) => (
	<div className="form-group">
		<label htmlFor="name">{props.name}</label>
		<input type="text" 
			className="form-control"
			id="name" 
			onChange={props.onChange}
			value={props.bobaName}
			placeholder={props.placeholder} />
	</div>
);

export default Name;