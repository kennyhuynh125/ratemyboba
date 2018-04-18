import React from 'react';

export const Description = (props) => (
	<div class="form-group">
		<label for="description">Description</label>
		<textarea type="text" 
			className="form-control"
			id="description" 
			onChange={props.onChange}
			required = "required" 
			placeholder="Recommended for.../Very strong tea taste.../etc" />
	</div>
);

export default Description;