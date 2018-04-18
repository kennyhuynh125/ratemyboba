import React from 'react';
import axios from 'axios';

class BobaPost extends React.Component {
	render() {
		return (
			<div className="col-md-4 card">
				<div className="card-body">
					<h1>{this.props.name}</h1>
					<p><strong>{this.props.shop}</strong></p>
					<p>Sweetness: <strong>{this.props.sweetness}</strong></p>
					<p>Ice: <strong>{this.props.ice}</strong></p>
					<p>Toppings <strong>{this.props.toppings}</strong></p>
					<p>Description: <strong>{this.props.description}</strong></p>
				</div>
			</div>
		)
	}
}

export default BobaPost;