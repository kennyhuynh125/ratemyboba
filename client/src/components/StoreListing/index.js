import React from 'react';

const StoreListing = (props) => {
	return (
		<div>
			<p><strong>{props.name}</strong>, {props.address}, {props.city}, {props.state}</p>
		</div>
	)
}

export default StoreListing;