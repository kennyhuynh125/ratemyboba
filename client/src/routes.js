import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import Auth from './components/Auth';
import history from './history';

// components
import AddStore from './components/AddStore';
import About from './components/About';
import CreateBoba from './components/CreateBoba';
import Home from './components/Home';
import Callback from './components/Callback';
import UserBobas from './components/UserBobas';
import CurrentStores from './components/CurrentStores';
import EditBoba from './components/EditBoba';
import FullBobaPost from './components/FullBobaPost';

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
			<Route exact path="/addStore" render={(props) => <AddStore auth={auth} {...props} />} />
			<Route exact path="/editBoba/:boba_id" render={(props) => <EditBoba auth={auth} {...props} />} />
			<Route exact path="/boba/:boba_id" render={(props) => <FullBobaPost auth={auth} {...props} />} />
			<Route path="/callback" render={(props) => {
				handleAuthentication(props);
				return <Callback {...props} />
			}} />
			</div>
		</BrowserRouter>
	);
}