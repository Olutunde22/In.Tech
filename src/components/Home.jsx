import React from 'react';
import Notification from './shared/Notification';
import Layout from './shared/Layout';

const Home = () => {
	return (
		<>
			<Layout>
				<Notification show={true} message="Hello you have subscribed yayyy" />
			</Layout>
		</>
	);
};

export default Home;
