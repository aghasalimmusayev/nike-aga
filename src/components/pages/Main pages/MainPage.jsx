import React from 'react'
import Header from './Header'
import '../pageCss/mainPage.css'
import Jordan from './JordanPic'
import NikeFields from './NikeFields'
import Classics from './Classics'

function MainPage() {
    return (
        <main>
            <Header />
            <Jordan />
            <NikeFields />
            <Classics />
        </main>
    )
}

export default MainPage
