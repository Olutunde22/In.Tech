import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import Layout from '../shared/Layout';
import { signupFields } from './formFields';
import Alert from '../shared/Alert';
import { useSignUpMutation } from '../../redux/auth/authApi';
import { Asserts } from 'yup/lib/util/types';
import { AlertType } from '../types';
import { useAppDispatch, useAppSelector } from '../../redux/store/hooks';
import { setUserId, currentUserId } from '../../redux/auth/authSlice';
import { Redirect } from 'react-router-dom';

const SignupSchema = Yup.object().shape({
	firstName: Yup.string().required('Firstname is required'),
	lastName: Yup.string().required('Lastname is required'),
	email: Yup.string().email('Invalid Email').required('Email is Required'),
	password: Yup.string().min(6, 'Password is too short').required('Password is Required'),
});

interface SignupData extends Asserts<typeof SignupSchema> {}

const Signup = () => {
	const dispatch = useAppDispatch();
	const userId = useAppSelector(currentUserId);
	const [error, setError] = useState('');
	const [signup] = useSignUpMutation();

	const handleSignup = async (
		{ email, password, firstName, lastName }: SignupData,
		{ setSubmitting }: FormikHelpers<SignupData>
	) => {
		try {
			setSubmitting(true);
			const user = await signup({
				firstName,
				lastName,
				email,
				password,
			}).unwrap();
			dispatch(setUserId(user._id));
		} catch (err: any) {
			setError(err.data);
		}
	};

	if (userId) {
		return <Redirect to='/' />;
	}

	return (
		<Layout>
			<div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 xl:px-12 sm:px-6 lg:px-8">
				<div className="max-w-md w-full space-y-8 px-12 bg-white py-8 shadow-lg rounded-xl">
					<div>
						<h2 className="mt-6 text-center text-xl sm:text-3xl font-extrabold text-gray-900">
							Sign up
						</h2>
						<p className="mt-2 text-center text-sm text-gray-600">
							Or{' '}
							<a href="/login" className="font-medium text-blue-600 hover:text-blue-500">
								Sign in here
							</a>
						</p>
					</div>
					<Formik
						initialValues={
							{
								firstName: '',
								lastName: '',
								email: '',
								password: '',
							} as SignupData
						}
						validationSchema={SignupSchema}
						onSubmit={handleSignup}
					>
						{({ isSubmitting, errors, touched }) => (
							<Form>
								{error ? <Alert type={AlertType.ERROR} message={error} /> : null}
								{signupFields.map((field) => (
									<div className="my-2" key={field.id}>
										<label htmlFor={field.name} className="text-gray-500 font-normal">
											{field.label}
										</label>
										<Field
											id={field.name}
											name={field.name}
											type={field.type}
											autoComplete={field.name === 'password' ? 'current-password' : field.name}
											className={`relative block w-full px-3 py-3 border ${
												errors[field.name] && touched[field.name]
													? 'border-red-300 placeholder-red-500 focus:ring-red-500 focus:border-red-500'
													: 'border-gray-300 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500'
											} text-gray-900 rounded-lg focus:outline-none  focus:z-10 sm:text-sm shadow-sm`}
											placeholder={field.label}
										/>
										<ErrorMessage className="text-red-500 my-2" component="div" name={field.name} />
									</div>
								))}
								<div className="mt-2">
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
