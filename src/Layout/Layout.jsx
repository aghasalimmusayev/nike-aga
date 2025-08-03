import React, { useCallback, useEffect, useState } from 'react'
import Nav from '../components/Nav/Nav'
import Footer from '../components/Footer'
import CountryLinks from '../components/modals/CountryLinks'
import DashModal from '../components/modals/DashModal'
import { Outlet, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import SearchModal from '../components/modals/SearchModal';

function Layout() {
    const navigate = useNavigate()
    const [cModal, setCModal] = useState(false)
    const [dashModal, setDashModal] = useState(false)
    const { searchToggle } = useSelector(state => state.toggleSearch)
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
    const openCModal = useCallback(() => {
        setCModal(true)
    }, [])
    const closeCModal = useCallback(() => {
        setCModal(false)
    }, [])
    function toggleDashModal(e) {
        e.stopPropagation()
        setDashModal(!dashModal)
    }
    const logOut = useCallback(() => {
        localStorage.removeItem('user');
        setUser(null)
        setDashModal(false)
        navigate('/')
    }, [navigate])


    return (
        <>
            <Nav toggleDashModal={toggleDashModal} user={user} />
            <main>
                <Outlet />
            </main>
            {dashModal && <DashModal user={user} logOut={logOut} close={() => setDashModal(false)} />}
            <Footer openCModal={openCModal} />
            {cModal && <CountryLinks closeCModal={closeCModal} cModal={cModal} />}
            {searchToggle && <SearchModal />}
        </>
    )
}

export default Layout
