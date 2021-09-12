import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Layout from '../shared/Layout';
import Alert from '../shared/Alert';
import { signupFields } from './formFields';

const SignupSchema = Yup.object().shape({
	firstname: Yup.string().required('Required'),
	lastname: Yup.string().required('Required'),
	email: Yup.string().email('Invalid Email').required('Required'),
	password: Yup.string().min(6, 'Password too short').required('Required'),
});

const Signup = () => {
	const [error, setError] = useState('');

	const handleSignup = async (values, { setSubmitting }) => {
		try {
			setTimeout(() => {
				setError('Error');
				setSubmitting(true);
			}, 300);
		} catch (err) {
			setError(err);
		}
	};

	return (
		<Layout>
			<div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
				<div className="max-w-md w-full space-y-8 px-12 bg-white py-8 shadow-lg rounded-xl">
					<div>
						<h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign up</h2>
						<p className="mt-2 text-center text-sm text-gray-600">
							Or{' '}
							<a href="/login" className="font-medium text-blue-600 hover:text-blue-500">
								Sign in here
							</a>
						</p>
					</div>
					<Formik
						initialValues={{
							firstname: '',
							lastname: '',
							email: '',
							password: '',
						}}
						validationSchema={SignupSchema}
						onSubmit={handleSignup}
					>
						{({ isSubmitting, touched, errors }) => (
							<Form>
								{error ? <Alert type="error" message={error} /> : null}

								{signupFields.map((field) => (
									<div className="my-2" key={field.id}>
										<label htmlFor={field.name} className="text-gray-500 font-normal">
											{field.label}
										</label>
										<Field
											id={field.name}
											name={field.name}
											type={field.name}
											className={`relative block w-full px-3 py-3 border ${
												errors[field.name] && touched[field.name]
													? 'border-red-500'
													: 'border-gray-300'
											}   placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm shadow-sm`}
											placeholder={field.label}
										/>
										<ErrorMessage className="text-red-500" component="div" name={field.name} />
									</div>
								))}

								<div className="my-2">
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
										{isSubmitting ? 'Signing up...' : 'Sign up'}
									</button>
								</div>
							</Form>
						)}
					</Formik>
				</div>
			</div>
		</Layout>
	);
};

export default Signup;