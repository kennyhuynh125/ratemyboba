import React from 'react';

export const Sweetness = (props) => (
	<div class="form-group">
		<label for="sweetness">Sweetness Level</label>
		<input type="text" 
			className="form-control"
			id="sweetness" 
			onChange={props.onChange}
			required="required" 
			placeholder="Regular, less sweet, 75%..." />
	</div>
);

export default Sweetness;