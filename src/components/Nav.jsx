import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { getNavlinks } from '../../src/redux/LinksDataSlice'
import { IoMdHeartEmpty } from "react-icons/io";
import { PiBag } from "react-icons/pi";
import { FiUser } from "react-icons/fi";
import { HiOutlineXMark } from "react-icons/hi2";
import { SlArrowRight } from "react-icons/sl";
import { SlArrowLeft } from "react-icons/sl";
import './pages/pageCss/nav.css'
import Logo from '../components/childComponents/Logo'
import NikeManLogo from '../components/childComponents/Nav children/NikeManLogo'
import NikeArrowIcon from '../components/childComponents/Nav children/NikeArrowIcon'
import HelpModal from '../components/modals/HelpModal'
import SearchBox from './childComponents/Nav children/SearchBox';
import { openSearch } from '../redux/ToggleSearchSlice';

function Nav() {
    // Mobile menu states
    const [menuStep, setMenuStep] = useState(0);
    const [selectedLink, setSelectedLink] = useState(null);
    const [selectedTitle, setSelectedTitle] = useState(null);
    // Desktop navigation states
    const { linkData, loading, error } = useSelector(store => store.links)
    const [altData, setAltData] = useState([])
    const [hoverAlt, setHoverAlt] = useState(false)
    const altLinksRef = useRef(null)
    const [help, setHelp] = useState(false)
    const helpRef = useRef(null)
    const [menuBar, setMenuBar] = useState(false)
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
            } else {
                setIsAtTop(false);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    // Desktop altLinks functions
    function showAlt(linkName) {
        const linkObj = linkData?.find(item => item.name === linkName);
        setAltData(linkObj.altCat);
        setHoverAlt(true)
    }
    function hideAlt() {
        setAltData([])
        setHoverAlt(false)
    }
    useEffect(() => {
        if (altLinksRef.current) {
            if (hoverAlt) altLinksRef.current.style.maxHeight = altLinksRef.current.scrollHeight + 'px';
            else altLinksRef.current.style.maxHeight = '0px';
        }
    }, [hoverAlt, altData])
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
    function handleLinkClick(link) {
        setSelectedLink(link);
        setMenuStep(1);
    }
    function handleTitleClick(title) {
        setSelectedTitle(title);
        setMenuStep(2);
    }
    function goBack() {
        if (menuStep === 2) {
            setSelectedTitle(null);
            setMenuStep(1);
        } else if (menuStep === 1) {
            setSelectedLink(null);
            setMenuStep(0);
        }
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
                                <NikeManLogo />
                            </Link>
                            <Link to={'/'}>
                                <NikeArrowIcon />
                            </Link>
                        </div>
                        <ul className="top_right">
                            <li><Link className='top_right_link' to={'/'}>Find a Store</Link></li>
                            <li className='help' onMouseLeave={hideHelpModal}>
                                <Link className='top_right_link' to={'/'} onMouseOver={showHelpModal}>Help</Link>
                                {help && <HelpModal helpRef={helpRef} />}
                            </li>
                            <li><Link className='top_right_link' to={'/'}>Join Us</Link></li>
                            <li><Link className='top_right_link' to={'/signIn'}>Sign In</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="navlinks_bg">
                <div className="container">
                    <div className="nav_content">
                        <Link to={'/'}><Logo /></Link>
                        <div className='links' onMouseLeave={hideAlt}>
                            <div className='navlinks'>
                                {linkData?.map(item => (
                                    <NavLink
                                        key={item.id}
                                        to={'/'}
                                        onMouseOver={(e) => showAlt(item.name)}>
                                        {item.name}
                                    </NavLink>
                                ))}
                            </div>
                            <div className="altLinks" ref={altLinksRef}>
                                {altData?.map((item, index) => (
                                    <div className='altCategories' key={index}>
                                        <Link className='cat_name' to={'/'}>{item.title}</Link>
                                        {item.items.map((element, itemIndex) => (
                                            <Link className='category' key={itemIndex} to={'/'}>{element}</Link>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="right_links">
                            <SearchBox onClick={() => dispatch(openSearch())} />
                            <Link to={'/wishlist'} className="wish_icon_box">
                                <IoMdHeartEmpty style={{ fontSize: '24px' }} />
                            </Link>
                            <Link to={'/signIn'} className="user_icon_box">
                                <FiUser style={{ fontSize: '24px' }} />
                            </Link>
                            <Link to={'/shoppingCart'} className="cart_icon_box">
                                <PiBag style={{ fontSize: '24px' }} />
                            </Link>
                            <div className="menu_bar" onClick={openBar}>
                                <div className="bar1"></div>
                                <div className="bar2"></div>
                                <div className="bar3"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {menuBar && (
                <div className="mobile_menu">
                    {menuStep > 0 && (
                        <button onClick={goBack} className="back_btn">
                            <SlArrowLeft style={{ fontSize: '14px' }} />
                            <span>{menuStep === 1 ? 'All' : selectedLink.name}</span>
                        </button>
                    )}
                    <button
                        className="close_btn"
                        onClick={() => {
                            setMenuBar(false);
                            setMenuStep(0);
                            setSelectedLink(null);
                            setSelectedTitle(null);
                        }}>
                        <HiOutlineXMark style={{ fontSize: '28px' }} />
                    </button>
                    {menuStep === 0 && linkData?.map(link => (
                        <button
                            key={link.id}
                            onClick={() => handleLinkClick(link)}
                            className="menu_link">
                            <span>{link.name}</span>
                            <SlArrowRight style={{ fontSize: '16px' }} />
                        </button>
                    ))}
                    {menuStep === 1 && (
                        <div>
                            <Link className="selected_link_title">{selectedLink?.name}</Link>
                            <div>
                                {selectedLink?.altCat.map((cat, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleTitleClick(cat)}
                                        className="menu_title">
                                        <span>{cat.title}</span>
                                        <SlArrowRight style={{ fontSize: '16px' }} />
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                    {menuStep === 2 && (
                        <div>
                            <Link>{selectedTitle?.title}</Link>
                            {selectedTitle?.items.map((item, index) => (
                                <Link to="/" key={index} className="menu_item" onClick={() => setMenuBar(false)}>
                                    {item}
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </nav>
    )
}

export default Nav