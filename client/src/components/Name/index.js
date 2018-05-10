import React from 'react';

export const Name = (props) => (
	<div class="form-group">
		<label for="name">{props.name}</label>
		<input type="text" 
			className="form-control"
			id="name" 
			onChange={props.onChange}
			placeholder={props.placeholder} />
	</div>
);

export default Name;