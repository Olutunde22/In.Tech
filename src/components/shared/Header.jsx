import React from 'react';
import {useGetUsersQuery} from '../../redux/usersApi.js'

const Header = () => {

  const {data, isLoading, isSuccess, isError} = useGetUsersQuery()
	return (
		<div className="">
			<header className="">
				<h1>Hello World</h1>
			</header>
		</div>
	);
}

export default Header;
