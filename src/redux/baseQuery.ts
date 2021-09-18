import { BaseQueryApi } from '@reduxjs/toolkit/dist/query/baseQueryTypes';
import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { logout } from './auth/authSlice';
// const baseUrl = 'https://olutunde-ecommerce.herokuapp.com/api/';
const baseUrl = "http://localhost:4000/api/"

const axiosBaseQuery = () => async (req: AxiosRequestConfig, api: BaseQueryApi) => {
	try {
		const result = await axios({
			...req,
			url: baseUrl + req.url,
			headers: {
				XMLHttpRequest,
				ContentType: 'application/json',

			},
		});
		return { data: result.data };
	} catch (axiosError) {
		const err = axiosError as AxiosError;
		if (err.response?.status === 401) {
			api.dispatch(logout())
		}
		return {
			error: { status: err.response?.status, data: err.response?.data },
		};
	}
};


export const baseQuery = axiosBaseQuery();
