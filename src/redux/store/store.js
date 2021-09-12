import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { usersApi } from '../usersApi';
import { authApi } from '../auth/authApi';
import userReducer from '../userSlice';
import authReducer from '../auth/authSlice';

export const rootReducer = combineReducers({
	users: userReducer,
	[usersApi.reducerPath]: usersApi.reducer,
	auth: authReducer,
	[authApi.reducerPath]: authApi.reducer,
});

export const store = configureStore({
	reducer: {
		reducer: rootReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(usersApi.middleware).concat(authApi.middleware),
});

setupListeners(store.dispatch);
