import React from 'react';
import { useGetUsersQuery } from './redux/usersApi';

const Header = () => {

  const {data, isLoading, isSuccess, isError} = useGetUsersQuery()
	return (
		<div className="">
			<header className="">
        {isLoading && 'Loading...'}
				<h1>Hello World</h1>
			</header>
		</div>
	);
}

export default Header;
