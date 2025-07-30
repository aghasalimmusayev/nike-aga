import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    wishList: JSON.parse(localStorage.getItem('wishList')) || []
}

export const wishSlice = createSlice({
    name: 'wishList',
    initialState,
    reducers: {
        addToWish: (state, action) => {
            const exists = state.wishList.some(item => item.id === action.payload.id);
            if (!exists) {
                state.wishList.push(action.payload);
            }
        },
        removeFromWish: (state, action) => {
            state.wishList = state.wishList.filter(item => item.id !== action.payload);
        }
    }
});

export const { addToWish, removeFromWish } = wishSlice.actions;
export default wishSlice.reducer;
