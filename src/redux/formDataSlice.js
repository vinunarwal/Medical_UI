import {createSlice } from "@reduxjs/toolkit";

const initialState = {
    gender : "NA"
}

export const formSlice = createSlice({
    name: "formData",
    initialState,
    reducers: {
        setData: (state, action) => {
            const formData = {
                gender: action.payload,
            }
            state.gender = formData
        },
    }
});

export const { setData } = formSlice.actions;
export default formSlice.reducer;
