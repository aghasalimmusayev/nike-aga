import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getLinks } from "../service/service";

const state = {
    linkData: [],
    loading: false,
    error: null
}

export const getNavlinks = createAsyncThunk('navlinks', async () => {
    const response = await getLinks()
    console.log(response)
    return response
})

export const linkSlice = createSlice({
    name: 'navLinks',
    initialState: state,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getNavlinks.pending, (state) => {
            state.loading = true
            state.error = null
        })
        builder.addCase(getNavlinks.fulfilled, (state, action) => {
            state.loading = false
            state.linkData = action.payload
        })
        builder.addCase(getNavlinks.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        })
    }
})

export default linkSlice.reducer

