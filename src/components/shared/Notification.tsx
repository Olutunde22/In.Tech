import React, { useState, Fragment, useEffect } from 'react';
import { XCircleIcon, CheckCircleIcon, XIcon } from '@heroicons/react/solid';
import { Transition } from '@headlessui/react';
import { AlertMessage, AlertType } from '../types';

const Notification = ({ type, message }: AlertMessage) => {
	const [isShown, setIsShown] = useState(true);

	useEffect(() => {
		setIsShown(true);
		setTimeout(() => {
			setIsShown(false);
		}, 5000);
	}, []);

	return (
		<>
			<Transition
				as={Fragment}
				show={isShown}
				enter="transform transition duration-[400ms]"
				enterFrom="opacity-0 rotate-[-120deg] scale-50"
				enterTo="opacity-100 rotate-0 scale-100"
				leave="transform duration-200 transition ease-in-out"
				leaveFrom="opacity-100 rotate-0 scale-100"
				leaveTo="opacity-0 scale-95"
			>
				<div className="p-6 max-w-sm mx-auto absolute z-10 right-10 top-20 bg-white rounded-xl shadow-md flex items-center space-x-4">
					<div
						className={`${
							type === AlertType.ERROR ? 'text-red-700' : 'text-green-700'
						} rounded pr-2 mt-0.5 overflow-hidden focus:outline-none`}
					>
						{type === AlertType.ERROR ? (
							<XCircleIcon className="h-4 w-4 my-auto" />
						) : (
							<CheckCircleIcon className="h-4 w-4 my-auto" />
						)}
					</div>
					<div className="text-sm md:text-normal inline">{message}</div>
					<button type="button" className="" onClick={() => setIsShown(!isShown)}>
						<XIcon className="h-4 w-4 my-auto" />
					</button>
				</div>
			</Transition>
		</>
	);
};

export default Notification;
