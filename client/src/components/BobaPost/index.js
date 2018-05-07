import React from 'react';
import './style.css';
class BobaPost extends React.Component {
	render() {
		return (
			<div className="col-md-4">
				<div className="boba-post">
					<h2>{this.props.name}</h2>
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