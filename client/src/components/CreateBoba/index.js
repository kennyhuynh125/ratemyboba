import React from 'react';
import axios from 'axios';
import history from '../../history';

import Navbar from '../Navbar';
import Sweetness from '../Sweetness';
import Toppings from '../Toppings';
import Ice from '../Ice';
import Name from '../Name';
import Description from '../Description';
import Stores from '../Stores';

import './style.css'

class CreateBoba extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			store:'',
			toppings: '',
			description: '',
			ice: '',
			sweetness: '',
			imageName: '',
			stores: [],
		}
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
		this.handleSweetnessChange = this.handleSweetnessChange.bind(this);
		this.handleIceChange = this.handleIceChange.bind(this);
		this.handleToppingsChange = this.handleToppingsChange.bind(this);
		this.handleStoreChange = this.handleStoreChange.bind(this);
	}

	// when component mounts, stores will be ready
	componentDidMount() {
		axios.get('/getShops')
		.then((response) => {
			this.setState({stores: response.data});
		})
		.catch((error) => {
			console.log("error", error);
		});
	}

	// changes the name state when input is being typed
	handleNameChange(e) {
		this.setState({ name: e.target.value });
		e.preventDefault();
	}

	//changes the name state when input is being typed
	handleDescriptionChange(e) {
		this.setState({ description: e.target.value });
		e.preventDefault();
	}

	// changes the sweetness state when input is being typed
	handleSweetnessChange(e) {
		this.setState({ sweetness: e.target.value });
		e.preventDefault();
	}

	// changes the ice state when input is being typed
	handleIceChange(e) {
		this.setState({ ice: e.target.value });
		e.preventDefault();
	}

	// changes the toppings state when input is being typed
	handleToppingsChange(e) {
		this.setState({ toppings: e.target.value });
		e.preventDefault();
	}

	// changes the store state when input is being typed
	handleStoreChange(e) {
		this.setState({ store: e.target.value });
		e.preventDefault();
	}

	// first checks if any input is empty
	// if not, call a HTTP request to add boba item to database
	handleSubmit() {
		if (this.state.name.length === 0 || this.state.sweetness.length === 0 || this.state.toppings.length === 0
			|| this.state.ice.length === 0 || this.state.store.length === 0 || this.state.description.length === 0) {
			return;
		} else {
			axios.post('/addBoba', {
				name: this.state.name,
				sweetness:this.state.sweetness,
				toppings: this.state.toppings,
				ice: this.state.ice,
				description: this.state.description,
				shop: this.state.store,
				user_id: localStorage.getItem('username')
			})
			.then((response) => {
				alert("Added boba successfully.");
				history.replace('/');
				
			})
			.catch((error) => {
				console.log("error", error);
			});
		}
	}

	render() {
		const { auth } = this.props;
		const { isAuthenticated } = this.props.auth;
		return (
			<div>
				<Navbar auth={auth} />
				<div className="container">
				{
					!isAuthenticated() && (
						<h1>Please log in to access this page.</h1>
					)
				}
				{
					isAuthenticated() && (
						<div className="form">
							<h1>Add Your Boba Drink!</h1>
							<div className="form-group">
								<Name onChange={this.handleNameChange} name="Drink Name" placeholder="Jasmine Green Tea, Boba Milk Tea..." />
								<Sweetness onChange={this.handleSweetnessChange} name="Sweetness Level" placeholder="Regular, 70%, less, 10%" />
								<Ice onChange={this.handleIceChange} name="Ice Level" placeholder="Regular, 70%, less, 10%" />
								<Toppings onChange={this.handleToppingsChange} name="Toppings" placeholder="Boba, grass jelly, lychee jelly..." />
								<Description onChange={this.handleDescriptionChange} name="Description" placeholder="Recommended for..." />
								<Stores stores={this.state.stores} onChange={this.handleStoreChange} store={this.state.store} name="Select a Store" />
								<button className="btn btn-primary" type="button" onClick={this.handleSubmit}>Create Boba!</button>	
							</div>
						</div>
					)
				}
				</div>
			</div>
		)
	}
}

export default CreateBoba;