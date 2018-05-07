import React from 'react';

const StoreListing = (props) => {
	return (
		<div>
			<p>{props.name}, {props.address}, {props.city}, {props.state}</p>
		</div>
	)
}

export default StoreListing;