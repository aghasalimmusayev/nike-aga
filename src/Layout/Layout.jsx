import React, { useState } from 'react'
import Nav from '../components/Nav/Nav'
import Footer from '../components/Footer'
import CountryLinks from '../components/modals/CountryLinks'
import { Outlet } from 'react-router-dom'

function Layout() {
    const [cModal, setCModal] = useState(false)
    function openCModal() {
        setCModal(true)
    }
    function closeCModal() {
        setCModal(false)
    }
    return (
        <>
            <Nav />
            <main>
                <Outlet />
            </main>
            <Footer openCModal={openCModal} />
            {cModal && <CountryLinks closeCModal={closeCModal} cModal={cModal} />}
        </>
    )
}

export default Layout
