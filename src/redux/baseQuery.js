import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export default fetchBaseQuery({
	baseUrl: process.env.BASE_QUERY_URL,
	headers: {
		Authorization: 'Bearer <insert JWT Token here>',
		contentType: 'application/json',
	},
});
