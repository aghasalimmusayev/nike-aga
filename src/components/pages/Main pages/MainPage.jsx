import React from 'react'
import Header from './Header'
import '../pageCss/mainPage.css'
import Jordan from './JordanPic'
import NikeFields from './NikeFields'
import Classics from './Classics'
import Navigations from './Navigations'
import Footer from './Footer'
import CountryLinks from './CountryLinks'

function MainPage() {
    return (
        <main>
            <Header />
            <Jordan />
            <NikeFields />
            <Classics />
            <Navigations />
            <Footer />
            <CountryLinks />
        </main>
    )
}

export default MainPage
