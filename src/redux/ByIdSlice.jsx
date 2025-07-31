import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"; 
import { productById } from '../service/service'

const state = {
    objById: {}
}

export const getProductById = createAsyncThunk('objById', async (id) => {
    const response = await productById(id)
    return response
})

export const getProduct = createSlice({
    name: 'objById',
    initialState: state,
    extraReducers: (builder) => {
        builder.addCase(getProductById.fulfilled, (state, action) => {
            state.objById = action.payload
        })
    }
})

export default getProduct.reducer
