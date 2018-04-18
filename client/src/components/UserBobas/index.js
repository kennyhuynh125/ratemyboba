import React from 'react';
import axios from 'axios';

import Navbar from '../Navbar';
import BobaPost from '../BobaPost';

class UserBobas extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			bobas: [],
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
			<div className="container">
				<Navbar auth={auth} />
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
		)
	}
}

export default UserBobas;