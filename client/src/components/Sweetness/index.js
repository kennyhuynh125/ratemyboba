import React from 'react';

export const Sweetness = (props) => (
	<div class="form-group">
		<label for="sweetness">{props.name}</label>
		<input type="text" 
			className="form-control"
			id="sweetness" 
			onChange={props.onChange}
			required="required" 
			placeholder={props.placeholder}/>
	</div>
);

export default Sweetness;