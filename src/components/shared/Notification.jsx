import React from 'react';
import { ShieldExclamationIcon, XIcon } from '@heroicons/react/solid';

const Notification = () => {
	return (
		<div className="relative flex justify-betweenbg-white rounded overflow-hidden p-2 space-x-1">
			<div className="absolute inset-0 border-l-4 border-red-400"></div>
			<div className="flex items-baseline">
				<span className="bg-red-300 bg-opacity-50 rounded-full p-1">
					<ShieldExclamationIcon className="h-6 w-auto text-red-400" />
				</span>
			</div>
			<div className="flex flex-grow items-center">
				<p className="leading-tight text-xs md:text-sm">
					Your account has been
					<strong className="text-red-400">blocked</strong>, thank you for choose Tailwind CSS Design.
				</p>
			</div>
			<div className="z-10">
				<button
					type="button"
					className="bg-indigo-300 bg-opacity-25 text-gray-700 rounded overflow-hidden p-1 lg:p-2 focus:outline-none"
				>
					<XIcon className="h-4 w-auto" />
				</button>
			</div>
		</div>
	);
};

export default Notification;
