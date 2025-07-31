import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { footerLinks } from "../service/service";

const state = {
    footerData: []
}

export const getFooterLinks = createAsyncThunk("footerLinks", async () => {
    const response = await footerLinks();
    return response
})

export const footerSlice = createSlice({
    name: "footerLinks",
    initialState: state,
    extraReducers: (builder) => {
        builder.addCase(getFooterLinks.fulfilled, (state, action) => {
            state.footerData = action.payload
        })
    }
})

export default footerSlice.reducer