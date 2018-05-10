import React from 'react';

export const State = (props) => (
	<div class="form-group">
		<label for="state">{props.name}</label>
		<input type="text" 
			className="form-control"
			id="city" 
			onChange={props.onChange}
			placeholder={props.placeholder} />
	</div>
);

export default State;