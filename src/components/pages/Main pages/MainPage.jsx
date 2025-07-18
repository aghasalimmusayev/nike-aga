import React, { useState } from 'react'
import '../pageCss/mainPage.css'
import Header from './Header'
import Jordan from './JordanPic'
import NikeFields from './NikeFields'
import Classics from './Classics'
import Navigations from './Navigations'
import Footer from './Footer'
import CountryLinks from '../../modals/CountryLinks'
import SearchModal from '../../modals/SearchModal';
import { useSelector } from 'react-redux'

function MainPage() {

    const { toggleSearch } = useSelector(state => state.toggleSearch)
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
            {toggleSearch && <SearchModal />}
            {cModal && <CountryLinks closeCModal={closeCModal} cModal={cModal} />}
        </main>
    )
}

export default MainPage
