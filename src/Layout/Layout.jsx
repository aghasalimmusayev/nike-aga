import React from 'react'
import Nav from '../components/Nav/Nav'
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <>
            <Nav />
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default Layout
