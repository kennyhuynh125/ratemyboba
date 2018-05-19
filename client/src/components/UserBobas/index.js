import React from 'react';
import axios from 'axios';

import Navbar from '../Navbar';
import BobaPost from '../BobaPost';

class UserBobas extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			bobas: [],
			profile: {}
		}
	}

	componentWillMount() {
		const { userProfile, getProfile } = this.props.auth;

		if (!userProfile) {
			getProfile((err, profile) => {
				this.setState({ profile });
			})
		} else {
			this.setState({ profile: userProfile });
		}
	}

	//when component mounts, get all the bobas from this user.
	componentDidMount() {
		const user_id = localStorage.getItem('username');
		axios.get(`/user_bobas/${user_id}`)
		.then((response) => {
			this.setState({
				bobas: response.data
			});
		})
		.catch((error) => {
			console.log("error", error);
		})
	}

	render() {
		const { auth } = this.props;
		const { isAuthenticated } = this.props.auth;
		return (
			<div>
				<Navbar auth={auth} />
				<div>
					{
						!isAuthenticated() && (
							<h1>You are not allowed to access this page.</h1>
						)
					}
					{
						isAuthenticated() && (
							<h1>My Drinks</h1>
						)
					}
					{
						isAuthenticated() && (
							this.state.bobas.map((boba) => {
								return <BobaPost
										key={boba._id}
										name={boba.name}
										ice={boba.ice}
										shop={boba.shop}
										sweetness={boba.sweetness}
										toppings={boba.toppings}
										description={boba.description}
										boba_id={boba._id}
										edit={true} />
							})
						)
					}
				</div>
			</div>
		)
	}
}

export default UserBobas;