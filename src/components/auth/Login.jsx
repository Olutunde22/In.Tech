import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
	email: Yup.string().email('Invalid Email').required('Required'),
	password: Yup.string().min(6, 'Password too short').required('Required'),
});

const Login = () => {
	const handleLogin = async ({ email, password }, { setSubmitting }) => {
		setTimeout(() => {
			setSubmitting(true);
		}, 300);
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-md w-full space-y-8">
				<div>
					<h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
						Sign in to your account
					</h2>
					<p className="mt-2 text-center text-sm text-gray-600">
						Or{' '}
						<a href="/signup" className="font-medium text-indigo-600 hover:text-indigo-500">
							Sign up here
						</a>
					</p>
				</div>
				<Formik
					initialValues={{
						email: '',
						password: '',
					}}
					validationSchema={LoginSchema}
					onSubmit={handleLogin}
				>
					{({ isSubmitting }) => (
						<Form>
							<div className="shadow-sm my-5">
								<label htmlFor="email" className="sr-only">
									Email address
								</label>
								<Field
									id="email"
									name="email"
									type="email"
									className="relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
									placeholder="Email address"
								/>
							</div>
							<div>
								<label htmlFor="password" className="sr-only">
									Password
								</label>
								<Field
									id="password"
									name="password"
									type="password"
									className="relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
									placeholder="Password"
								/>
							</div>

							<div className="flex items-center justify-between my-4">
								<div className="text-sm">
									<a
										href="/forgot-password"
										className="font-medium text-indigo-600 hover:text-indigo-500"
									>
										Forgot your password?
									</a>
								</div>
							</div>
							<button
								type="submit"
								className="group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
								disabled={isSubmitting}
							>
								{isSubmitting ? (
									<svg
										style={{ borderTopColor: 'transparent' }}
										className="animate-spin h-5 w-5 mr-3 rounded-full border-2 border-white border-solid"
										viewBox="0 0 24 24"
									>
										{' '}
									</svg>
								) : null}
								{isSubmitting ? 'Logging in...' : 'Log in'}
							</button>
						</Form>
					)}
				</Formik>
			</div>
		</div>
	);
};

export default Login;
