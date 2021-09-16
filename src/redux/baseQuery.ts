import axios, { AxiosError, AxiosRequestConfig } from 'axios';
const baseUrl = 'https://olutunde-ecommerce.herokuapp.com/api/';

const axiosBaseQuery = () => async (req: AxiosRequestConfig) => {
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
		return {
			error: { status: err.response?.status, data: err.response?.data },
		};
	}
};


export const baseQuery = axiosBaseQuery();
