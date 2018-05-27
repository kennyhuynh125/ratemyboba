import React from 'react';
import './style.css';

const StoreListing = (props) => {
	return (
		<div className="store-list">
			<p><strong>{props.name}</strong></p>
			<p>{props.address}, {props.city}, {props.state}</p>
		</div>
	)
}

export default StoreListing;