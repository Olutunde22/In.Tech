import React from 'react';
import { XCircleIcon, CheckCircleIcon } from '@heroicons/react/solid';
import { AlertMessage, AlertType } from '../types';

const Alert = ({ type, message }: AlertMessage) => {
	return (
		<div
			className={` transform motion-safe:hover:scale-110 flex ${
				type === AlertType.ERROR ? 'text-red-700 bg-red-100' : 'text-green-700 bg-green-100'
			} rounded  px-4 py-3 relative`}
			role="alert"
		>
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
		</div>
	);
};

export default Alert;
