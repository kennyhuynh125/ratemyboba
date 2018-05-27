import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

class BobaPost extends React.Component {
	render() {
		const edit = this.props.edit;
		return (
			<div className="col-lg-3">
				<div className="boba-post">
					<h2 id="boba-name">{this.props.name}</h2>
					<p><strong>{this.props.shop}</strong></p>
					<p>Sweetness: <strong>{this.props.sweetness}</strong></p>
					<p>Ice: <strong>{this.props.ice}</strong></p>
					<p>Toppings: <strong>{this.props.toppings}</strong></p>
					<p>Description: <strong>{this.props.description}</strong></p>
					<div className="boba-buttons">
					<Link to={`/boba/${this.props.boba_id}`}><button className="btn-btn-primary">Full Post</button></Link>
					{
						edit && (
							<div>
							<Link to={`/editBoba/${this.props.boba_id}`}><button className="btn btn-primary">Edit</button></Link>
							</div>
						)
					}
					</div>
				</div>
			</div>
		)
	}
}

export default BobaPost;