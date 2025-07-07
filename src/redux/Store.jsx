import { configureStore } from '@reduxjs/toolkit'
import LinkDataSlice from './LinksDataSlice'

export const store = configureStore({
    reducer: {
        links: LinkDataSlice
    }
})