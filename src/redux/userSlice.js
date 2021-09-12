import {createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: "users",
    initialState : {},
    reducers : {
        setUserById : (state, action) =>{
            
        }
    }
})

export const {setUserById} = userSlice.actions;

export default userSlice.reducer