import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getLinks } from "../service/service";

const state = {
    linkData: []
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
        builder.addCase(getNavlinks.fulfilled, (state, action) => {
            state.linkData = action.payload
        })
    }
}) 

export default linkSlice.reducer