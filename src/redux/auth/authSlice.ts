import { createSlice } from '@reduxjs/toolkit';
import { deleteCookie, setCookie } from '../cookie';
import { RootState } from '../store/store';

interface Initialstate {
	userId: string | null
}

const initial: Initialstate = {
	userId: null
}

const authSlice = createSlice({
	name: 'auth',
	initialState: initial,
	reducers: {
		setUserId: (state, action) => {
			state.userId = action.payload;
			setCookie(state.userId!)
		},
		logout: (state) => {
			state.userId = null
			deleteCookie()
		}
	},
});

export const { setUserId, logout } = authSlice.actions;

export const currentUserId = (state: RootState) => state.auth.userId;

export default authSlice.reducer;
