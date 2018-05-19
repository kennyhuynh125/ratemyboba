import React from 'react';

export const Sweetness = (props) => (
	<div className="form-group">
		<label htmlFor="sweetness">{props.name}</label>
		<input type="text" 
			className="form-control"
			id="sweetness" 
			onChange={props.onChange}
			required="required"
			value={props.bobaSweetness}
			placeholder={props.placeholder}/>
	</div>
);

export default Sweetness;