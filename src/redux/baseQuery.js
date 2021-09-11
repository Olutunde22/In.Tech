import axios from 'axios';
const baseUrl = process.env.BASE_QUERY_URL + 'api/';

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
			error: { status: err.response.data.error, data: err.response.data },
		};
	}
};

export const baseQuery = axiosBaseQuery();
