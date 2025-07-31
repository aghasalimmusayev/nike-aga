import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { classicsData } from "../service/service";

const state = {
    classics: [],
    loading: false,
    error: null
}

export const getClassics = createAsyncThunk('classics', async () => {
    const response = await classicsData();
    return response
})

export const classicSlice = createSlice({
    name: 'classics',
    initialState: state,
    extraReducers: (builder) => {
        builder.addCase(getClassics.pending, (state) => {
            state.loading = true
            state.error = null
        })
        builder.addCase(getClassics.fulfilled, (state, action) => {
            state.loading = false
            state.classics = action.payload
        })
        builder.addCase(getClassics.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        })
    }
})

export default classicSlice.reducer