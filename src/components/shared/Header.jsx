import React from 'react';

const Header = () => {
	return (
		<div className="p-3 flex justify-between">
			<div>
				<a href="/" alt="home">
					<img className="h-10 w-18" src="/images/olutunde.png" alt="logo" />
				</a>
			</div>

			<div className="flex">
				<a
					href="/login"
					className="group mr-3 relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-blue-500 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
				>
					Log in
				</a>
				<a
					href="/signup"
					className="group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
				>
					Sign up
				</a>
			</div>
		</div>
	);
};

export default Header;
