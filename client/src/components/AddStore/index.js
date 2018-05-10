import React from 'react';
import axios from 'axios';

import history from '../../history';
import Navbar from '../Navbar';
import Name from '../Name';
import Address from '../Address';
import City from '../City';
import State from '../State';

import './style.css';

class AddStore extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			city: '',
			address: '',
			state: ''
		}
		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleCityChange = this.handleCityChange.bind(this);
		this.handleAddressChange = this.handleAddressChange.bind(this);
		this.handleStateChange = this.handleStateChange.bind(this);
		this.addStore = this.addStore.bind(this);

	}

	// updates name state with value from input
	handleNameChange(e) {
		this.setState({name: e.target.value});
		e.preventDefault();
	}

	// updates city state with value from input
	handleCityChange(e) {
		this.setState({city: e.target.value});
		e.preventDefault();
	}

	// updates address state with value from input
	handleAddressChange(e) {
		this.setState({address: e.target.value});
		e.preventDefault();
	}

	// updates the state's state with value from input
	handleStateChange(e) {
		this.setState({state: e.target.value});
		e.preventDefault();
	}

	// adds store by calling a POST request to the API
	addStore() {
		if (this.state.name.length === 0 || this.state.city.length === 0
			|| this.state.address.length == 0 || this.state.state.length === 0) {
			alert("One of the fields is blank. Please fill it in.");
			return;
		}
		axios.post('/addShop', {
			name: this.state.name,
			city: this.state.city,
			address: this.state.address,
			state: this.state.state
		})
		.then((response) => {
			alert("Store has been added to our database successfully.");
			history.replace('/currentStores');
		})
		.catch((error) => {
			console.log("error ", error);
		})
	}

	render() {
		const {auth} = this.props;
		return (
			<div>
				<Navbar auth={auth} />
				<h2>Want to add a new store?</h2>
				<div className="container">
					<div className="form-group">
						<Name onChange={this.handleNameChange} name="Store Name" placeholder="Super Cue, ShareTea..." />
						<Address onChange={this.handleAddressChange} name="Address" placeholder="123 My Street" />
						<City onChange={this.handleCityChange} name="City" placeholder="San Francisco, San Jose..." />
						<State onChange={this.handleStateChange} name="State" placeholder="CA, NY, TX" />
						<button className="btn btn-primary" type="button" onClick={this.addStore}>Add Store!</button>
					</div>
				</div>
			</div>
		)
	}

}

export default AddStore;