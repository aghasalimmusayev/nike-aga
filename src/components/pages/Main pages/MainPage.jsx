import React, { useState } from 'react'
import Header from './Header'
import '../pageCss/mainPage.css'
import Jordan from './JordanPic'
import NikeFields from './NikeFields'
import Classics from './Classics'
import Navigations from './Navigations'
import Footer from './Footer'
import CountryLinks from './CountryLinks'

function MainPage() {

    const [cModal, setCModal] = useState(false)
    function openCModal() {
        setCModal(true)
    }
    function closeCModal() {
        setCModal(false)
    }
    return (
        <main>
            <Header />
            <Jordan />
            <NikeFields />
            <Classics />
            <Navigations />
            <Footer openCModal={openCModal} />
            {cModal && <CountryLinks closeCModal={closeCModal} cModal={cModal} />}
        </main>
    )
}

export default MainPage
