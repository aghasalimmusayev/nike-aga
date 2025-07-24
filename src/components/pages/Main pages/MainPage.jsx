import React from 'react'
import Header from './Header'
import Jordan from './JordanPic'
import NikeFields from './NikeFields'
import Classics from './Classics'
import '../pageCss/mainPage.css'
import Navigations from './Navigations'
import SearchModal from '../../modals/SearchModal';
import { useSelector } from 'react-redux'

function MainPage() {

    const { toggleSearch } = useSelector(state => state.toggleSearch)
    return (
        <main>
            <Header />
            <Jordan />
            <NikeFields />
            <Classics />
            <Navigations />
            {toggleSearch && <SearchModal />}
        </main>
    )
}

export default MainPage
