import React from 'react';
import { Redirect, Route, BrowserRouter } from 'react-router-dom';
import Auth from './components/Auth';
import history from './history';

// components
import About from './components/About';
import CreateBoba from './components/CreateBoba';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Callback from './components/Callback';
import UserBobas from './components/UserBobas';
import CurrentStores from './components/CurrentStores';

// instantiate auth instance
const auth = new Auth();
const handleAuthentication = (nextState, replace) => {
	if (/access_token|id_token|error/.test(nextState.location.hash)) {
		auth.handleAuthentication();
	}
}

export const makeRoutes = () => {
	return (
		<BrowserRouter history={history} component={Home}>
			<div>
			<Route exact path="/" render={(props) => <Home auth={auth} {...props} />} />
			<Route exact path="/about" render={(props) => <About auth={auth} {...props} />} />
			<Route eact path="/createBoba" render={(props) => <CreateBoba auth={auth} {...props} />} />
			<Route exact path="/user_bobas" render={(props) => <UserBobas auth={auth} {...props} />} />
			<Route exact path="/currentStores" render={(props) => <CurrentStores auth={auth} {...props} />} />
			<Route path="/callback" render={(props) => {
				handleAuthentication(props);
				return <Callback {...props} />
			}} />
			</div>
		</BrowserRouter>
	);
}