import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '../baseQuery';

export const authApi = createApi({
	reducerPath: 'authApi',
	baseQuery: baseQuery,
	endpoints: (builder) => ({
		signUp: builder.mutation({
			query: (data) => {
				return { url: 'users', method: 'POST', data };
			}, 
		}),
        login: builder.mutation({
			query: (data) => {
				return { url: 'login', method: 'POST',  data };
			}, 
		}),
	}),
});

export const { useSignUpMutation, useLoginMutation } = authApi
