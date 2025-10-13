import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getLinks } from "../service/service";

const state = {
    linkData: [],
    loading: false,
    error: null
}

export const getNavlinks = createAsyncThunk('navlinks', async () => {
    const fetchData = async () => {
        try {
            const data = await getLinks()
            if (data && data.length > 0) {
                return data
            }
            return null
        } catch (error) {
            console.log('Data gelmedi: ', error.message);
            return null
        }
    }
    let data = await fetchData()
    if (data) return data

    return new Promise((resolve) => {
        let count = 0;
        const myInterval = setInterval(async () => {
            count++
            data = await fetchData()
            if (data) {
                clearInterval(myInterval)
                resolve(data)
            }
            else if (count >= 10) {
                clearInterval(myInterval)
                reject(new Error('10 cəhddən sonra data gəlmədi'));
            }
        }, 2500);
    })
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

