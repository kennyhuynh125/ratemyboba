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

class EditBoba extends React.Component {
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
		this.editBoba = this.editBoba.bind(this);
		this.removeBoba = this.removeBoba.bind(this);
		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
		this.handleSweetnessChange = this.handleSweetnessChange.bind(this);
		this.handleIceChange = this.handleIceChange.bind(this);
		this.handleToppingsChange = this.handleToppingsChange.bind(this);
		this.handleStoreChange = this.handleStoreChange.bind(this);
	}

	// need to get the boba information and set it to our state fields
	// we also need to get the shops
	componentDidMount() {
		axios.get(`/boba/${this.props.match.params.boba_id}`)
		.then((response) => {
			this.setState({
				name: response.data[0].name,
				store: response.data[0].shop,
				toppings: response.data[0].toppings,
				description: response.data[0].description,
				ice: response.data[0].ice,
				sweetness: response.data[0].sweetness,
			})
		})
		.catch((error) => {
			console.log("error", error);
		});

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

	// similar to creating a boba, we call a post request on edit_boba
	editBoba() {
		if (this.state.name.length === 0 || this.state.sweetness.length === 0 || this.state.toppings.length === 0
			|| this.state.ice.length === 0 || this.state.store.length === 0 || this.state.description.length === 0) {
			return;
		} else {
			axios.post(`/edit_boba/${this.props.match.params.boba_id}`, {
				name: this.state.name,
				sweetness:this.state.sweetness,
				toppings: this.state.toppings,
				ice: this.state.ice,
				description: this.state.description,
				shop: this.state.store,
				user_id: localStorage.getItem('username')
			})
			.then((response) => {
				alert("Edited boba successfully.");
				history.replace('/user_bobas');
				
			})
			.catch((error) => {
				console.log("error", error);
			});
		}
	}

	// removes the given boba by calling the remove_boba controller method using axios
	removeBoba() {
		axios.delete(`/remove_boba/${this.props.match.params.boba_id}`)
		.then(() => {
			alert("Sucessfully deleted boba.");
			history.replace('/user_bobas');
		})
		.catch((error) => {
			console.log("error", error);
		})
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
							<h1>Edit Boba</h1>
							<div className="form-group">
								<Name onChange={this.handleNameChange} name="Drink Name" placeholder="Jasmine Green Tea, Boba Milk Tea..." bobaName={this.state.name} />
								<Sweetness onChange={this.handleSweetnessChange} name="Sweetness Level" placeholder="Regular, 70%, less, 10%" bobaSweetness={this.state.sweetness} />
								<Ice onChange={this.handleIceChange} name="Ice Level" placeholder="Regular, 70%, less, 10%" bobaIce={this.state.ice} />
								<Toppings onChange={this.handleToppingsChange} name="Toppings" placeholder="Boba, grass jelly, lychee jelly..." bobaToppings={this.state.toppings} />
								<Description onChange={this.handleDescriptionChange} name="Description" placeholder="Recommended for..." bobaDescription={this.state.description} />
								<Stores stores={this.state.stores} onChange={this.handleStoreChange} store={this.state.store} name="Select a Store" bobaStore={this.state.store} />
								<div className="buttons">
									<button className="btn btn-primary" type="button" onClick={this.editBoba}>Edit Boba!</button>
									<button className="btn btn-primary btn-danger" type="button" 
										onClick={() => { if (window.confirm("Are you sure you want to delete this boba?")) this.removeBoba() } }>
										Delete Boba
									</button>
								</div>
							</div>
						</div>
					)
				}
				</div>
			</div>
		)
	}
}

export default EditBoba;