import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { navigationsLinks } from "../service/service";

const state = {
    navigationData: [],
}

export const getNavigationsLinks = createAsyncThunk('navigationsLinks', async () => {
    const response = await navigationsLinks()
    return response
})

export const navigationSlice = createSlice({
    name: "navigationsLinks",
    initialState: state,
    extraReducers: (builder) => {
        builder.addCase(getNavigationsLinks.fulfilled, (state, action) => {
            state.navigationData = action.payload
        })
    }
})

export default navigationSlice.reducer