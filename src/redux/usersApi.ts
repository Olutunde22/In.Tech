import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from './baseQuery';

export const usersApi = createApi({
	reducerPath: 'usersApi',
	baseQuery,
	endpoints: (builder) => ({
		getUsers: builder.query({
			query: () => {
				return { url: 'users', method: 'GET' };
			},
		}),
		getUser: builder.query({
			query: (id) => {
				return { url: `users/${id}`, method: 'GET' };
			},
		}),
	}),
});

export const { useGetUsersQuery, useGetUserQuery } = usersApi;
