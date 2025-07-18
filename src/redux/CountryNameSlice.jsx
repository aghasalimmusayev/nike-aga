import { createSlice } from "@reduxjs/toolkit";

const state = {
    countryName: localStorage.getItem('CountryName') || 'United States'
}

export const countryNameSlice = createSlice({
    name: 'countryName',
    initialState: state,
    reducers: {
        setCountryName: (state, action) => {
            localStorage.setItem("CountryName", action.payload);
            state.countryName = action.payload;
        }
    }
})

export const { setCountryName } = countryNameSlice.actions;
export default countryNameSlice.reducer