import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	products : []
}
const productsSlice = createSlice({
	name: 'productsSlice',
	initialState,
	reducers: {},
});

export const {} = productsSlice.actions;

export default productsSlice.reducer;
