import { createApi } from '@reduxjs/toolkit/query/react';
import fetchBaseQuery from './baseQuery';

export const usersApi = createApi({
	reducerPath: 'usersApi',
	baseQuery: fetchBaseQuery,
	endpoints: (builder) => ({
		getUsers: builder.query({
			query: () => 'users',
		}),
	}),
});

export const { useGetUsersQuery } = usersApi;
