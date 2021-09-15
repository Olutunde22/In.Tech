import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from './baseQuery';

export const productsApi = createApi({
	reducerPath: 'productsApi',
	baseQuery,
	endpoints: (builder) => ({
		getProducts: builder.query({
			query: () => {
				return { url: 'products', method: 'GET' };
			},
		}),
		getProduct: builder.query({
			query: (id) => {
				return { url: `products/${id}`, method: 'GET' };
			},
		}),
	}),
});

export const { useGetProductsQuery, useGetProductQuery} = productsApi;
