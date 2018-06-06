import React from 'react';
import axios from 'axios';
import history from '../../history';

import Navbar from '../Navbar';

// component to show boba post + peoples reviews about the drink
class FullBobaPost extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			review: '',
			currentReviews: [],
			user_id: '',
			boba_id: '',
			name: '',
			shop: '',
			sweetness: '',
			ice: '',
			toppings: '',
			description: '',
		}
		this.handleReviewChange = this.handleReviewChange.bind(this);
		this.addReview = this.addReview.bind(this);
	}

	// get current reviews and set it to
	// this.state.currentReviews
	componentDidMount() {
		axios.get(`/boba/${this.props.match.params.boba_id}`)
		.then((response) => {
			this.setState({
				currentReviews: response.data[0].reviews,
				user_id: response.data[0].user_id,
				boba_id: this.props.match.params.boba_id,
				name: response.data[0].name,
				shop: response.data[0].shop,
				sweetness: response.data[0].sweetness,
				ice: response.data[0].ice,
				toppings: response.data[0].toppings,
				description: response.data[0].description
			});
		})
		.catch((error) => {
			console.log("error", error);
		});
	}

	// changes this.state.review to what is being input.
	handleReviewChange(e) {
		this.setState({ review: e.target.value });
		e.preventDefault();
	}

	// updates reviews everytime there is a new review.
	addReview() {
		if (this.state.review.length === 0) {
			alert("Review cannot be empty!");
			return;
		}
		this.setState({ currentReviews: this.state.currentReviews.push(this.state.review)});
		axios.post(`/updateReviews/${this.props.match.params.boba_id}`, {
			user_id: this.state.user_id,
			reviews: this.state.currentReviews
		})
		.then((response) => {
			alert("Review added for this boba!");
			history.replace(`/boba/${this.state.boba_id}`)
		})
		.catch((error) => {
			console.log('error', error);
		});
	}

	render() {
		const { auth } = this.props;
		const { isAuthenticated } = this.props.auth;
		const reviews = this.state.currentReviews;
		return (
			<div>
				<Navbar auth={auth} />
				<div className="container">
					<h1>{this.state.name}</h1>
					<h2>{this.state.shop}</h2>
					<p>Ice: {this.state.ice}</p>
					<p>Sweetness: {this.state.sweetness}</p>
					<p>Topping: {this.state.toppings}</p>
					<p>Description: {this.state.description}</p>
					<br />
					<br />
					<p>Reviews</p>
					<ul>
						{reviews.map((review,i) => {
							return <li className="reviews" key={i}><strong>{review}</strong></li>
						})}
					</ul>
					{
						!isAuthenticated() && (
							<p>You need to be logged in to review a drink!</p>
						)
					}
					{
						isAuthenticated() && (
							<form>
								<div className="form-group">
								<label htmlFor="review">Leave a review for this drink!</label>
								<textarea className="form-control" id="review" cols="60" rows="5"
								placeholder="Tastes great!" onChange={this.handleReviewChange} required />
								<div>
									<button className="btn btn-primary" type="button" onClick={this.addReview}>Add Review</button>
								</div>
								</div>
							</form>
						)
					}
				</div>
			</div>
		)
	}
}

export default FullBobaPost;
