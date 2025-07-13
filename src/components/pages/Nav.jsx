import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { getNavlinks } from '../../redux/LinksDataSlice'
import './pageCss/nav.css'
import Logo from '../childComponents/Logo'
import { FiSearch } from "react-icons/fi";
import { IoMdHeartEmpty } from "react-icons/io";
import { PiBag } from "react-icons/pi";
import NikeManLogo from '../childComponents/Nav children/NikeManLogo'
import NikeArrowIcon from '../childComponents/Nav children/NikeArrowIcon'
import HelpModal from '../childComponents/Nav children/HelpModal'
import { FiUser } from "react-icons/fi";
import { HiOutlineXMark } from "react-icons/hi2";
import { SlArrowRight } from "react-icons/sl";
import { SlArrowLeft } from "react-icons/sl";

function Nav() {
    const [menuStep, setMenuStep] = useState(0); // 0: name-lər, 1: title-lar, 2: item-lər
    const [selectedLink, setSelectedLink] = useState(null); // kliklənən name
    const [selectedTitle, setSelectedTitle] = useState(null); // kliklənən title

    const { linkData, loading, error } = useSelector(store => store.links)
    const [altData, setAltData] = useState([])
    const [hoverAlt, setHoverAlt] = useState(false)
    const altLinksRef = useRef(null)
    const [help, setHelp] = useState(false)
    const helpRef = useRef(null)
    const [menuBar, setMenuBar] = useState(false)
    const dispastch = useDispatch()
    useEffect(() => {
        dispastch(getNavlinks())
    }, [])
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
        setSelectedLink(link);      // seçilən link saxlanır
        setMenuStep(1);             // title mərhələsinə keçirik
    }
    function handleTitleClick(title) {
        setSelectedTitle(title);    // seçilən title saxlanır
        setMenuStep(2);             // item mərhələsinə keçirik
    }
    function goBack() {
        if (menuStep === 2) {
            setSelectedTitle(null);
            setMenuStep(1);           // item → title
        } else if (menuStep === 1) {
            setSelectedLink(null);
            setMenuStep(0);           // title → name
        }
    }

    if (loading) {
        return <p className='links_loading'>Linkler yuklenir...</p>
    }
    if (error) {
        return <p className='links_error'>Error: {error}</p>
    }
    return (
        <nav>
            <div className="toplinks_bg">
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
                                {help && <HelpModal
                                    helpRef={helpRef}
                                />}
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
                        <Logo />
                        <div className='links' onMouseLeave={hideAlt}>
                            <div className={`navlinks`}  >
                                {linkData?.map(item => (
                                    <NavLink
                                        key={item.id}
                                        to={'/'}
                                        onMouseOver={(e) => showAlt(item.name)}>
                                        {item.name}
                                    </NavLink>
                                ))}
                            </div>
                            <div className="altLinks"
                                ref={altLinksRef}>
                                {altData?.map((item, index) => (
                                    <div className='altCategories' key={index} >
                                        <Link className='cat_name' to={'/'}>{item.title}</Link>
                                        {item.items.map((element, index) => (
                                            <Link className='category' key={index} to={'/'}>{element}</Link>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="right_links">
                            <div className="search_box">
                                <div className="search_icon">
                                    <FiSearch style={{ fontSize: '20px', cursor: 'pointer' }} />
                                </div>
                                <input type="text" placeholder='Search' />
                            </div>
                            <Link to={'/'} className="wish_icon_box">
                                <IoMdHeartEmpty style={{ fontSize: '24px' }} />
                            </Link>
                            <Link to={'/signIn'} className="user_icon_box">
                                <FiUser style={{ fontSize: '24px' }} />
                            </Link>
                            <Link to={'/'} className="cart_icon_box">
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
                        }}><HiOutlineXMark style={{ fontSize: '28px' }} />
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
