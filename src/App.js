import React, { Suspense } from 'react';
import { Home, Login, Signup } from './routes';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
	return (
		<Router>
			<Suspense
				fallback={
					<div className="flex items-center flex-col min-h-screen justify-center">
						{' '}
						<svg
							style={{ borderTopColor: 'transparent'}}
							className="animate-spin h-20 w-20 rounded-full border-blue-500 border-4 border-solid"
							viewBox="0 0 24 24"
						>
						</svg>
						<span className="text-gray-500 text-2xl mt-4">Loading...</span>
					</div>
				}
			>
				<Switch>
					<Route path="/" exact={true} component={Home} />
					<Route path="/login" exact={true} component={Login} />
					<Route path="/signup" exact={true} component={Signup} />
				</Switch>
			</Suspense>
		</Router>
	);
}

export default App;
