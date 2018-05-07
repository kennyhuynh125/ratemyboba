import React from 'react';
import axios from 'axios';

import Navbar from '../Navbar';

class CurrentStores extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			stores: []
		}
	}

	componentDidMount() {

	}

	render() {
		const {auth} = this.props;
		return (
			<div>
				<Navbar auth={auth} />
				<h1> All the stores will be listed here.</h1>
			</div>
		)
	}
}

export default CurrentStores;