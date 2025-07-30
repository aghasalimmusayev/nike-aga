import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartList: JSON.parse(localStorage.getItem('cartList')) || [],
    selectedItems: []
}

export const cartSlice = createSlice({
    name: 'cartList',
    initialState,
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
        },
        toggleSelectItem: (state, action) => {
            const id = action.payload
            if (state.selectedItems.includes(id)) {
                state.selectedItems = state.selectedItems.filter(itemId => itemId !== id)
            }
            else state.selectedItems.push(id)
        },
        clearSelection: (state) => {
            state.cartList = state.cartList.filter(item => !state.selectedItems.includes(item.id))
            state.selectedItems = []
        }
    }
})

export const {
    addToCart,
    removeFromCart,
    incrementCount,
    decrementCount,
    toggleSelectItem,
    clearSelection
} = cartSlice.actions

export default cartSlice.reducer