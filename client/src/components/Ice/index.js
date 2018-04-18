import React from 'react';

export const Ice = (props) => (
	<div class="form-group">
		<label for="Ice">Ice Level</label>
		<input type="text" 
			className="form-control"
			id="ice" 
			onChange={props.onChange}
			required="required"
			placeholder="Regular, less ice, 75%... " />
	</div>
);

export default Ice;