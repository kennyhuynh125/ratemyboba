import React from 'react';

export const Description = (props) => (
	<div className="form-group">
		<label htmlFor="description">{props.name}</label>
		<textarea type="text" 
			className="form-control"
			id="description" 
			onChange={props.onChange}
			required = "required"
			value={props.bobaDescription}
			placeholder={props.placeholder} />
	</div>
);

export default Description;