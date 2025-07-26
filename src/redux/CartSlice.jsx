import { createSlice } from "@reduxjs/toolkit";

const state = {
    cartList: []
}

export const cartSlice = createSlice({
    name: 'cartList',
    initialState: state,
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload
            const itemVar = state.cartList.find(i => i.id == item.id)
            if (itemVar) itemVar.count += 1
            else state.cartList.push({ ...item, count: 1 })
        },
        removeFromCart: (state, action) => {
            const id = action.payload
            state.cartList = state.cartList.filter(p => p.id !== id)
        }
    }
})

export const { addToCart, removeFromCart } = cartSlice.actions
export default cartSlice.reducer