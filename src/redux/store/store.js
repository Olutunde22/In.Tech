import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { usersApi } from '../usersApi';
import { authApi } from '../auth/authApi';
import authSliceReducer from '../auth/authSlice';

export const rootReducer = combineReducers({
	auth: authSliceReducer,
	[authApi.reducerPath]: authApi.reducer,
	[usersApi.reducerPath]: usersApi.reducer,
});

export const store = configureStore({
	reducer: {
		reducer: rootReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(usersApi.middleware).concat(authApi.middleware),
	
});


