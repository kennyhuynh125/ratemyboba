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
		console.log(this.state.bobas);
		return (
			<div>
				<Navbar auth={auth} />
				<div className="container">
					{
						!isAuthenticated() && (
							<h1>You are not allowed to access this page.</h1>
						)
					}
					{
						isAuthenticated() && (
							this.state.bobas.map((boba) => {
								return <BobaPost
										name={boba.name}
										ice={boba.ice}
										shop={boba.shop}
										sweetness={boba.sweetness}
										toppings={boba.toppings}
										description={boba.description} />
							})
						)
					}
				</div>
			</div>
		)
	}
}

export default UserBobas;