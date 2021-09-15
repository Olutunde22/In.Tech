import { configureStore, combineReducers, PreloadedState } from '@reduxjs/toolkit';
import { usersApi } from '../usersApi';
import { authApi } from '../auth/authApi';
import authSliceReducer from '../auth/authSlice';

export const rootReducer = combineReducers({
	authSliceReducer,
	[authApi.reducerPath]: authApi.reducer,
	[usersApi.reducerPath]: usersApi.reducer,
});



export const store = (preloadedState?: PreloadedState<RootState>) => configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(usersApi.middleware).concat(authApi.middleware),
	preloadedState
});


export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof store>
export type AppDispatch = AppStore['dispatch'];