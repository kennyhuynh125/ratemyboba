import React from 'react';
import style from './style.css'

const StoreListing = (props) => {
	return (
		<div>
			<p><strong>{props.name}</strong>, {props.address}, {props.city}, {props.state}</p>
		</div>
	)
}

export default StoreListing;