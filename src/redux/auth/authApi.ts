import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '../baseQuery';
import { Credentials, User } from '../../components/types';

export const authApi = createApi({
	reducerPath: 'authApi',
	baseQuery,
	endpoints: (builder) => ({
		login: builder.mutation<User, Credentials>({
			query: (data) => {
				return { url: 'login', method: 'POST', data };
			},
		}),
		signUp: builder.mutation<User, Credentials>({
			query: (data) => {
				return { url: 'users', method: 'POST', data };
			},
		}),
	}),
});

export const { useLoginMutation, useSignUpMutation } = authApi;
