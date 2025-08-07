import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { countryLinks } from "../service/service";

const state = {
    countryData: []
}

export const getCountryLinks = createAsyncThunk("countryLinks", async () => {
    const response = await countryLinks()
    return response
})

export const countrySlice = createSlice({
    name: "countryLinks",
    initialState: state,
    extraReducers: (builder) => {
        builder.addCase(getCountryLinks.fulfilled, (state, action) => {
            state.countryData = action.payload
        })
    }
})

export default countrySlice.reducer