import { createSlice } from "@reduxjs/toolkit";

const state = {
    searchToggle: false
}

export const toggleSearchSlice = createSlice({
    name: 'toggleSearch',
    initialState: state,
    reducers: {
        openSearch: (state) => {
            state.searchToggle = true;
            console.log("toggleSearch:", state.searchToggle);
        },
        closeSearch: (state) => {
            state.searchToggle = false
        }
    }
})

export const { openSearch, closeSearch } = toggleSearchSlice.actions
export default toggleSearchSlice.reducer