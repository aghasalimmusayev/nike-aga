import React, { useEffect } from 'react'
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

function Nav() {

    const { linkData, loading, error } = useSelector(store => store.links)
    const dispastch = useDispatch()

    useEffect(() => {
        dispastch(getNavlinks())
    }, [])

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
                            <NikeManLogo />
                            <NikeArrowIcon />
                        </div>
                        <ul className="top_right">
                            <li><Link to={'/'}>Find a Store</Link></li>
                            <li><Link to={'/'}>Help</Link></li>
                            <li><Link to={'/'}>Join Us</Link></li>
                            <li><Link to={'/'}>Sign In</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="navlinks_bg">
                <div className="container">
                    <div className="nav_content">
                        <Logo />
                        <div className="navlinks">
                            {linkData?.map(item => (
                                <NavLink key={item.id} to={'/'}>{item.name}</NavLink>
                            ))}
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
                            <Link to={'/'} className="cart_icon_box">
                                <PiBag style={{ fontSize: '24px' }} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav
