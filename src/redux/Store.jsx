import { configureStore } from '@reduxjs/toolkit'
import LinkDataSlice from './LinksDataSlice'
import classicSlice from './ClassicsData'
import footerSlice from './FooterSlice'

export const store = configureStore({
    reducer: {
        links: LinkDataSlice,
        classics: classicSlice,
        footer: footerSlice
    }
})