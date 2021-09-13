import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '../baseQuery';

export const authApi = createApi({
	reducerPath: 'authApi',
	baseQuery: baseQuery,
	endpoints: (builder) => ({
		login: builder.mutation({
			query: (data) => {
				return { url: 'auth/email', method: 'POST', data };
			},
		}),
		signUp: builder.mutation({
			query: (data) => {
				return { url: 'users', method: 'POST', data };
			},
		}),
	}),
});

export const { useLoginMutation, useSignUpMutation } = authApi;
