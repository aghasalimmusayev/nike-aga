import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getNavlinks } from '../../redux/LinksDataSlice'
import './nav.css'
import NikeManLogo from './NikeManLogo'
import NikeArrowIcon from './NikeArrowIcon'
import HelpModal from '../modals/HelpModal'
import MobileNav from './MobileNav';
import Navlinks from './Navlinks'

function Nav() {

    const [menuBar, setMenuBar] = useState(false)
    const { linkData, loading, error } = useSelector(store => store.links)
    const [help, setHelp] = useState(false)
    const helpRef = useRef(null)
    // Nike scroll behavior states - YENİ
    const [isScrolled, setIsScrolled] = useState(false);
    const [scrollDirection, setScrollDirection] = useState('up');
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isAtTop, setIsAtTop] = useState(true);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getNavlinks())
    }, [])
    // Nike scroll behavior - YENİ
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            // Scroll istiqaməti təyin et
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setScrollDirection('down');
                setIsScrolled(true);
            } else if (currentScrollY < lastScrollY) {
                setScrollDirection('up');
                setIsScrolled(true);
            }
            // Tam yuxarıda olub olmamağını yoxla
            if (currentScrollY <= 10) {
                setIsAtTop(true);
                setIsScrolled(false);
                setScrollDirection('up');
            } else setIsAtTop(false);
            setLastScrollY(currentScrollY);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);
    // Desktop altLinks functions
    function showHelpModal() {
        setHelp(true)
    }
    function hideHelpModal() {
        setHelp(false)
    }
    useEffect(() => {
        if (helpRef.current) {
            if (help) helpRef.current.style.maxHeight = helpRef.current.scrollHeight + 'px';
            else helpRef.current.style.maxHeight = '0px';
        }
    }, [help])
    function openBar() {
        setMenuBar(true)
    }

    if (loading) {
        return <p className='links_loading'>Linkler yuklenir...</p>
    }
    if (error) {
        return <p className='links_error'>Error: {error}</p>
    }

    return (
        <nav className={`
            ${isAtTop ? 'nav-at-top' : ''} 
            ${isScrolled && scrollDirection === 'down' ? 'nav-hide' : ''} 
            ${isScrolled && scrollDirection === 'up' && !isAtTop ? 'nav-fixed' : ''}
        `}>
            <div className={`toplinks_bg ${isAtTop ? 'show' : 'hide'}`}>
                <div className="container">
                    <div className="toplinks">
                        <div className="top_left">
                            <Link to={'/'}>
                                <NikeManLogo width={'24px'} height={'24px'} />
                            </Link>
                            <Link to={'/'}>
                                <NikeArrowIcon width={'24px'} height={'24px'} />
                            </Link>
                        </div>
                        <ul className="top_right">
                            <li><Link className='top_right_link' to={'/'}>Find a Store</Link></li>
                            <li className='help' onMouseLeave={hideHelpModal}>
                                <Link className='top_right_link' to={'/'} onMouseOver={showHelpModal}>Help</Link>
                                {help && <HelpModal helpRef={helpRef} />}
                            </li>
                            <li><Link className='top_right_link' to={'/membership'}>Join Us</Link></li>
                            <li><Link className='top_right_link' to={'/signIn'}>Sign In</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <Navlinks openBar={openBar} />
            {menuBar && <MobileNav setMenuBar={setMenuBar} />}
        </nav>
    )
}

export default Nav