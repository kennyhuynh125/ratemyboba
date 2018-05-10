import React from 'react';

export const Description = (props) => (
	<div class="form-group">
		<label for="description">{props.name}</label>
		<textarea type="text" 
			className="form-control"
			id="description" 
			onChange={props.onChange}
			required = "required" 
			placeholder={props.placeholder} />
	</div>
);

export default Description;