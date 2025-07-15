import { configureStore } from '@reduxjs/toolkit'
import LinkDataSlice from './LinksDataSlice'
import classicSlice from './ClassicsData'

export const store = configureStore({
    reducer: {
        links: LinkDataSlice,
        classics: classicSlice
    }
})