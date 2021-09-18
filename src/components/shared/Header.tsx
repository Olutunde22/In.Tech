import React, { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon, ShoppingCartIcon, UserIcon } from '@heroicons/react/solid';
import { currentUserId, logout } from '../../redux/auth/authSlice';
import { useGetUserQuery } from '../../redux/usersApi';
import { useAppDispatch, useAppSelector } from '../../redux/store/hooks';
import { Redirect } from 'react-router-dom';

const Header = () => {
	const userId = useAppSelector(currentUserId);
	const { data: user } = useGetUserQuery(userId);
	

	return (
		<div className="p-3 flex justify-between shadow">
			<div className="flex lg:justify-center lg:w-1/3">
				<a href="/">
					<img className="h-10 w-18" src="/images/olutunde.png" alt="logo" />
				</a>
			</div>

			<div className="flex lg:justify-center lg:w-1/3">
				{user ? (
					<Account user={user} />
				) : (
					<>
						<a
							href="/login"
							className="group mr-3 relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-blue-500 hover:border-blue-500 focus:outline-none"
						>
							Log in
						</a>
						<a
							href="/signup"
							className="group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
						>
							Sign up
						</a>{' '}
					</>
				)}
			</div>
		</div>
	);
};

const Account = (props: any) => {
	const { user } = props;
	const dispatch = useAppDispatch();

	const handleLogout = () =>{
		dispatch(logout());
		return <Redirect to='/' />;
	}
	return (
		<div className="w-56 text-right mr-3">
			<Menu as="div" className="relative inline-block text-left">
				<div>
					<Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 bg-blue-500 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
						<UserIcon className="w-6 h-5 mr-2" aria-hidden="true" />
						Account
						<ChevronDownIcon className="w-5 h-5 ml-2 -mr-1" aria-hidden="true" />
					</Menu.Button>
				</div>
				<Transition
					as={Fragment}
					enter="transition ease-out duration-100"
					enterFrom="transform opacity-0 scale-95"
					enterTo="transform opacity-100 scale-100"
					leave="transition ease-in duration-75"
					leaveFrom="transform opacity-100 scale-100"
					leaveTo="transform opacity-0 scale-95"
				>
					<Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
						<div className="px-1 py-1 ">
							<Menu.Item>
								<p className="group flex text-gray-500 rounded-md items-center w-full px-2 py-2 text-sm">
									Hi, {user.firstName}
								</p>
							</Menu.Item>
							<Menu.Item>
								{({ active }) => (
									<a
										href="/profile"
										className={`${
											active
												? 'bg-violet-500 text-white text-md font-medium bg-blue-200'
												: 'text-gray-900'
										} group flex rounded-md items-center w-full px-2 py-2 text-sm`}
									>
										{user.firstName}'s Profile
									</a>
								)}
							</Menu.Item>
						</div>
						<div className="px-1 py-1">
							<Menu.Item>
								{({ active }) => (
									<a
										href="/orders"
										className={`${
											active
												? 'bg-violet-500 text-white text-md font-medium bg-blue-200'
												: 'text-gray-900'
										} group flex rounded-md items-center w-full px-2 py-2 text-sm`}
									>
										{user.firstName}'s Orders
									</a>
								)}
							</Menu.Item>
							<Menu.Item>
								{({ active }) => (
									<a
										href="/cart"
										className={`${
											active
												? 'bg-violet-500 text-white text-md font-medium bg-blue-200'
												: 'text-gray-900'
										} group flex rounded-md items-center w-full px-2 py-2 text-sm`}
									>
										<ShoppingCartIcon className="h-5 w-6 mr-2" />
										{user.firstName}'s Cart
									</a>
								)}
							</Menu.Item>
						</div>
						<div className="px-1 py-1">
							<Menu.Item>
								{({ active }) => (
									<button
										onClick={handleLogout}
										className={`${
											active ? 'bg-violet-500  text-md font-medium bg-red-200' : null
										} group flex rounded-md text-red-500 justify-center items-center w-full py-2 text-sm`}
									>
										Log out
									</button>
								)}
							</Menu.Item>
						</div>
					</Menu.Items>
				</Transition>
			</Menu>
		</div>
	);
};

export default Header;
