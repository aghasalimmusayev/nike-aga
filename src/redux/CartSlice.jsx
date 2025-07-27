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
        },
        incrementCount: (state, action) => {
            const id = action.payload
            const item = state.cartList.find(i => i.id == id)
            if (item) {
                item.count += 1
            }
        },
        decrementCount: (state, action) => {
            const id = action.payload
            const item = state.cartList.find(i => i.id == id)
            if (item && item.count > 1) {
                item.count -= 1
            }
        }
    }
})

export const { addToCart, removeFromCart, incrementCount, decrementCount } = cartSlice.actions
export default cartSlice.reducer