import React from 'react';
import axios from 'axios';

import Navbar from '../Navbar';

// component to show boba post + peoples reviews about the drink
class FullBobaPost extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			review: '',
			currentReviews: [],
		}
		this.handleCommentChange = this.handleCommentChange.bind(this);
		this.addReview = this.addReview.bind(this);
	}

	// get current reviews and set it to
	// this.state.currentReviews
	componentDidMount() {

	}

	// changes this.state.review to what is being input.
	handleCommentChange(e) {
		this.setState({ comment: e.target.value });
		e.preventDefault();
	}

	addReview() {
		// api call using axios will go here
		// to update boba entry with the new comment.
	}

	render() {
		const { auth } = this.props;
		const { isAuthenticated } = this.props.auth;
		return (
			<div>
				<Navbar auth={auth} />
				<div className="container">
					<h1>In Development</h1>
					<p>Comments will be here</p>
					{
						!isAuthenticated() && (
							<h1>You need to be logged in to review a drink!</h1>
						)
					}
					{
						isAuthenticated() && (
							<form>
								<div className="form-group">
								<label htmlFor="review">Leave a review for this drink!</label>
								<textarea className="form-control" id="review" cols="60" rows="5"
								placeholder="Tastes great!" onChange={this.handleCommentChange} required />
								<button className="btn btn-primary" onSubmit={this.addReview}>Add Review</button>
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
