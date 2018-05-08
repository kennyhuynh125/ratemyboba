import React from 'react';
import axios from 'axios';

import history from '../../history';
import Navbar from '../Navbar';

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
				<h1>Add Store Component</h1>
				<p> Add form here </p>
			</div>
		)
	}

}

export default AddStore;