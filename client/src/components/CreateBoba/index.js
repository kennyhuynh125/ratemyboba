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
		console.log(this.state.profile);
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
			<div className="container">
			<Navbar auth={auth} />
			{
				!isAuthenticated() && (
					<h1>Please log in to access this page.</h1>
				)
			}
			{
				isAuthenticated() && (
					<div>
						<h1>Add Your Boba Drink!</h1>
						<div className="form-group">
							<Name onChange={this.handleNameChange} />
							<Sweetness onChange={this.handleSweetnessChange} />
							<Ice onChange={this.handleIceChange} />
							<Toppings onChange={this.handleToppingsChange} />
							<Description onChange={this.handleDescriptionChange} />
							<Stores stores={this.state.stores} onChange={this.handleStoreChange} store={this.state.store}/>
							<button className="btn btn-primary" type="button" onClick={this.handleSubmit}>Create Boba!</button>	
						</div>
					</div>
				)
			}
			</div>
		)
	}
}

export default CreateBoba;