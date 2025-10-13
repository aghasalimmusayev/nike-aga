import React, { useCallback, useEffect, useState } from 'react'
import Nav from '../components/Nav/Nav'
import Footer from '../components/Footer/Footer'
import CountryLinks from '../components/modals/CountryLinks'
import DashModal from '../components/modals/DashModal'
import { Outlet, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import SearchModal from '../components/modals/SearchModal';
import Loader from '../components/Loader'

function Layout() {
    const { loading } = useSelector(state => state.links)
    const [menuBar, setMenuBar] = useState(false)
    const navigate = useNavigate()
    const [cModal, setCModal] = useState(() => {
        return localStorage.getItem('selectedCountry') !== 'true';
    });
    const [dashModal, setDashModal] = useState(false)
    const { searchToggle } = useSelector(state => state.toggleSearch)
    const [user, setUser] = useState(() => {
        return JSON.parse(localStorage.getItem('user')) || null;
    });
    useEffect(() => {
        if (menuBar) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [menuBar]);
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

    if (loading) {
        return <div className='loader'><Loader /></div>
    }
    return (
        <>
            <Nav
                toggleDashModal={toggleDashModal}
                user={user}
                menuBar={menuBar}
                setMenuBar={setMenuBar} />
            <main>
                <Outlet />
            </main>
            {dashModal && <DashModal
                user={user}
                logOut={logOut}
                close={() => setDashModal(false)}
                setMenuBar={setMenuBar} />}
            <Footer openCModal={openCModal} />
            {cModal && <CountryLinks closeCModal={closeCModal} cModal={cModal} />}
            {searchToggle && <SearchModal />}
        </>
    )
}

export default Layout
