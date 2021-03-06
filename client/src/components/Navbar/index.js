import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

class Navbar extends React.Component {
	login() {
		this.props.auth.login();
	}

	logout() {
		this.props.auth.logout();
	}

	render() {
		const { isAuthenticated } = this.props.auth;
		return (
			<div>
				<div className="navbar navbar-fluid">
					<div className="navbar-header">
						<a className="navbar-brand">RateMyBoba</a>
				</div>
				<ul className="nav navbar-nav">
					<li><Link to='/'>Home</Link></li>
					<li><Link to='/about'>About</Link></li> 
					<li><Link to='/currentStores'>Current Stores</Link></li>
					<li><Link to='/addStore'>Add New Store</Link></li>
				</ul>
				<ul className="nav navbar-nav navbar-right">
					<li>
					{
						!isAuthenticated() && (
							<a onClick={this.login.bind(this)}>Login/Sign Up</a>
						)
					}
					</li>
					<li>
					{
							isAuthenticated() && (
								<Link to='/createBoba'>Add New Boba</Link>
							)
						}
					</li>
					<li>
					{
							isAuthenticated() && (
								<Link to='/user_bobas'>My Boba Drinks</Link>
							)
						}
					</li>
					<li>
					{
							isAuthenticated() && (
								<a onClick={this.logout.bind(this)}>Logout</a>
							)
						}
					</li>
				</ul>
				</div>
			</div>
		)
	}
}

export default Navbar;