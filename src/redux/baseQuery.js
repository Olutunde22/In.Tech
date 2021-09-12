import axios from 'axios';
const baseUrl = 'https://reqs.in/api/';

const axiosBaseQuery = () => async (req, api) => {
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
		const err = axiosError;
		return {
			error: { status: err.response.status, data: err.response.data },
		};
	}
};

export const baseQuery = axiosBaseQuery();
