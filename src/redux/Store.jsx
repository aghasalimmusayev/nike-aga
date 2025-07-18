import { configureStore } from '@reduxjs/toolkit'
import LinkDataSlice from './LinksDataSlice'
import classicSlice from './ClassicsData'
import navigationSlice from './NavigationSlice'
import footerSlice from './FooterSlice'
import countrySlice from './CountrySlice'
import countryNameSlice from './CountryNameSlice'
import toggleSearchSlice from './ToggleSearchSlice'

export const store = configureStore({
    reducer: {
        links: LinkDataSlice,
        classics: classicSlice,
        navigation: navigationSlice,
        footer: footerSlice,
        countries: countrySlice,
        country: countryNameSlice,
        toggleSearch: toggleSearchSlice
    }
})