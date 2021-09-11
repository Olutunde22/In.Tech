import React from 'react';
import { Formik, Form, Field, ErrorMessage as div } from 'formik';
import * as Yup from 'yup';
import Layout from '../shared/Layout';

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
		<Layout>
			<div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
				<div className="max-w-md w-full space-y-8 px-12 bg-white py-8 shadow-lg rounded-lg">
					<div>
						<h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
							Sign in to your account
						</h2>
						<p className="mt-2 text-center text-sm text-gray-600">
							Or{' '}
							<a href="/signup" className="font-medium text-blue-600 hover:text-blue-500">
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
						{({ isSubmitting, errors, touched }) => (
							<Form>
								<div className="my-5">
									<label htmlFor="email" className="text-gray-500 font-normal">
										Email address
									</label>
									<Field
										id="email"
										name="email"
										type="email"
										autoComplete="email"
										className={`relative block w-full px-3 py-3 border ${
											errors.email && touched.email ? 'border-red-500' : 'border-gray-300'
										}   placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm shadow-sm`}
										placeholder="Email address"
									/>
									{errors.email && touched.email ? (
										<div className="text-red-500">{errors.email}</div>
									) : null}
								</div>
								<div>
									<label htmlFor="password" className="text-gray-500 font-normal">
										Password
									</label>
									<Field
										id="password"
										name="password"
										type="password"
										autoComplete="current-password"
										className={`shadow-sm relative block w-full px-3 py-3 border ${
											errors.password && touched.password ? 'border-red-500' : 'border-gray-300'
										} placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm`}
										placeholder="Password"
									/>
									{errors.password && touched.password ? (
										<div className="text-red-500">{errors.password}</div>
									) : null}
								</div>

								<div className="flex items-center justify-between my-4">
									<div className="text-sm">
										<a
											href="/forgot-password"
											className="font-medium text-blue-600 hover:text-blue-500"
										>
											Forgot your password?
										</a>
									</div>
								</div>
								<button
									type="submit"
									className="group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
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
		</Layout>
	);
};

export default Login;
