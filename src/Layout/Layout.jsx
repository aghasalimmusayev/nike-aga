import React, { useEffect, useState } from 'react'
import Nav from '../components/Nav/Nav'
import Footer from '../components/Footer'
import CountryLinks from '../components/modals/CountryLinks'
import DashModal from '../components/modals/DashModal'
import { Outlet, useNavigate } from 'react-router-dom'

function Layout() {
    const navigate = useNavigate()
    const [cModal, setCModal] = useState(false)
    const [dashModal, setDashModal] = useState(false)
    const [user, setUser] = useState(() => {
        return JSON.parse(localStorage.getItem('user')) || null;
    });
    useEffect(() => {
        if (!dashModal) return;
        const handleClickOutside = (e) => {
            if (!e.target.closest('.dash-trigger') && !e.target.closest('.dash_modal')) {
                setDashModal(false);
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, [dashModal]);
    function openCModal() {
        setCModal(true)
    }
    function closeCModal() {
        setCModal(false)
    }
    function toggleDashModal(e) {
        e.stopPropagation()
        setDashModal(!dashModal)
    }
    function logOut() {
        localStorage.removeItem('user');
        setUser(null)
        setDashModal(false)
        navigate('/')
    }

    return (
        <>
            <Nav toggleDashModal={toggleDashModal} user={user} />
            <main>
                <Outlet />
            </main>
            {dashModal && <DashModal user={user} logOut={logOut} close={() => setDashModal(false)} />}
            <Footer openCModal={openCModal} />
            {cModal && <CountryLinks closeCModal={closeCModal} cModal={cModal} />}
        </>
    )
}

export default Layout
