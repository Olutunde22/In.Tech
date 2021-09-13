import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	userId : null
}
const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setUserId: (state, action) => {
			state.userId = action.payload;
		},
		logout: (state) => {
			state.userId = null
		}
	},
});

export const { setUserId, logout } = authSlice.actions;

export default authSlice.reducer;
