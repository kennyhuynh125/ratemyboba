import React from 'react';
import axios from 'axios';

import Navbar from '../Navbar';
import StoreListing from '../StoreListing';

class CurrentStores extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			stores: []
		}
	}

	// get all the shops and set stores state to the array of stores.
	componentDidMount() {
		axios.get('/getShops')
		.then((response) => {
			this.setState({stores: response.data})
		})
		.catch((error) => {
			console.log("error", error);
		})
	}

	render() {
		const {auth} = this.props;
		return (
			<div>
				<Navbar auth={auth} />
				<h2>Current Stores</h2>
				<div className="stores">
				{
					this.state.stores.map((store, i) => {
					return <StoreListing
						key = {i}
						name={store.name}
						city={store.city}
						address={store.address}
						state={store.state} />
					})
				}
				</div>
			</div>
		)
	}
}

export default CurrentStores;