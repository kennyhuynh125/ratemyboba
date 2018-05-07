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
				<ul>
					{
						this.state.stores.map((store, i)=> {
						return <li><StoreListing
									key={i}
									name={store.name}
									city={store.city}
									address={store.address}
									state={store.state} />
								</li>
						})
					}
				</ul>
			</div>
		)
	}
}

export default CurrentStores;