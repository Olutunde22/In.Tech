import React from 'react';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/" exact={true} component={Home} />
				<Route path="/login" exact={true} component={Login} />
				<Route path="/signup" exact={true} component={Signup} />
			</Switch>
		</Router>
	);
}

export default App;
