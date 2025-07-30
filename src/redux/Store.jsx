import { configureStore } from '@reduxjs/toolkit'
import LinkDataSlice from './LinksDataSlice'
import classicSlice from './ClassicsData'
import navigationSlice from './NavigationSlice'
import footerSlice from './FooterSlice'
import countrySlice from './CountrySlice'
import countryNameSlice from './CountryNameSlice'
import toggleSearchSlice from './ToggleSearchSlice'
import productsSlice from './ProductsSlice'
import getProduct from './ByIdSlice'
import cartSlice from './CartSlice'
import wishSlice from './WishSlice'
import localStorageMiddleware from './Middleware/LocaleStorageMiddleware'

export const store = configureStore({
    reducer: {
        links: LinkDataSlice,
        classics: classicSlice,
        navigation: navigationSlice,
        footer: footerSlice,
        countries: countrySlice,
        country: countryNameSlice,
        toggleSearch: toggleSearchSlice,
        products: productsSlice,
        objById: getProduct,
        cartList: cartSlice,
        wishList: wishSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware)
})

