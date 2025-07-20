import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { products } from "../service/service";

const initialState = {
    products: [],
    loading: false,
    error: null
};

export const getProducts = createAsyncThunk('products', async () => {
    const response = await products();
    return response
});

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state) => {
                state.loading = true;
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
    }
})

export default productsSlice.reducer