import React from 'react';

export const Ice = (props) => (
	<div class="form-group">
		<label for="Ice">{props.name}</label>
		<input type="text" 
			className="form-control"
			id="ice" 
			onChange={props.onChange}
			required="required"
			placeholder={props.placeholder} />
	</div>
);

export default Ice;