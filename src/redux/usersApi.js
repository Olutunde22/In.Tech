import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from './baseQuery';

export const usersApi = createApi({
	reducerPath: 'usersApi',
	baseQuery: baseQuery,
	endpoints: (builder) => ({
		getUsers: builder.query({
			query: () => {
				return { url: 'users', method: 'GET' };
			},
		}),
	}),
});

export const { useGetUsersQuery } = usersApi;
