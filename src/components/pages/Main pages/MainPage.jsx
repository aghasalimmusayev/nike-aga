import React, { useEffect } from 'react'
import Header from './Header'
import Jordan from './JordanPic'
import NikeFields from './NikeFields'
import Classics from './Classics'
import Navigations from './Navigations'
import '../pageCss/mainPage.css'

function MainPage() {

    useEffect(() => {
        document.title = 'Nike. Just do It'
    }, [])

    return (
        <main>
            <Header />
            <Jordan />
            <NikeFields />
            <Classics />
            <Navigations />
        </main>
    )
}

export default MainPage
