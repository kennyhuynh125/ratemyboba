import React from 'react';
import axios from 'axios';
import Navbar from '../Navbar';
import BobaPost from '../BobaPost';

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
		console.log(this.state.profile);
		const { auth } = this.props;
		const { isAuthenticated } = this.props.auth;
		return (
			<div>
				<Navbar auth={auth} />
				<h1>Rate My Boba</h1>
				<p>RateMyProfessor, but for Boba.</p>
				<h1>Boba Drinks</h1>
					<div>
					{
						this.state.bobas.map((boba) => {
							return <BobaPost
									name={boba.name}
									ice={boba.ice}
									shop={boba.shop}
									sweetness={boba.sweetness}
									toppings={boba.toppings}
									description={boba.description} />
						})
					}
					</div>
			</div>
		)
	}
}
export default Home;