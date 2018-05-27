import React from 'react';
import axios from 'axios';
import Navbar from '../Navbar';
import BobaPost from '../BobaPost';

import './style.css';

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			bobas: [],
			profile: {}
		};
	}
	componentWillMount() {
		const { isAuthenticated, getProfile } = this.props.auth;
		if (isAuthenticated())  {
			getProfile();
		}
	}

	// grabs all the boba data from the backend and stores it into the state.
	componentDidMount() {
		axios.get('/getAllBoba')
		.then((response) => {
			this.setState({
				bobas: response.data
			});
		})
		.catch((error) => {
			console.log('error ' + error);
		});
	}

	render() {
		const { auth } = this.props;
		return (
			<div>
				<Navbar auth={auth} />
				<div className="body">
					<div className="header">
						<h1>Rate My Boba</h1>
						<p>RateMyProfessor, but for Boba.</p>
						<h1>Current Bobas</h1>
					</div>
					<div className="boba-posts">
					{
						this.state.bobas.map((boba, i) => {
							return <BobaPost
								key={i}
								name={boba.name}
								ice={boba.ice}
								shop={boba.shop}
								sweetness={boba.sweetness}
								toppings={boba.toppings}
								description={boba.description}
								boba_id={boba._id} />
						})
					}
					</div>
				</div>
			</div>
		)
	}
}
export default Home;
