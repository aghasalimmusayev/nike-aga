import React from 'react'
import { Outlet } from 'react-router-dom'

function BlanckLayout() {
    return (
        <main>
            <Outlet />
        </main>
    )
}

export default BlanckLayout
