import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import Logo from '../childComponents/Logo'
import { Link, NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { IoMdHeartEmpty } from "react-icons/io";
import { PiBag } from "react-icons/pi";
import { FiUser } from "react-icons/fi";
import SearchBox from './SearchBox';
import { openSearch } from '../../redux/ToggleSearchSlice';

function Navlinks({ openBar, user }) {
    const { linkData } = useSelector(store => store.links)
    const cartItems = useSelector(state => state.cartList.cartList)
    const { wishList } = useSelector(state => state.wishList)
    const [altData, setAltData] = useState([])
    const [hoverAlt, setHoverAlt] = useState(false)
    const altLinksRef = useRef(null)
    const dispatch = useDispatch()
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
    const handleSearchOpen = useCallback(() => {
        dispatch(openSearch());
    }, [dispatch]);

    return (
        <div>
            <div className="navlinks_bg">
                <div className="container">
                    <div className="nav_content">
                        <Link to={'/'}><Logo /></Link>
                        <div className='links' onMouseLeave={hideAlt}>
                            <div className='navlinks'>
                                {linkData?.map(item => (
                                    <NavLink
                                        key={item.id}
                                        to={`/products/${item.name}`}
                                        onClick={hideAlt}
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
                            <SearchBox onClick={handleSearchOpen} />
                            <Link to={`${user ? '/profile' : '/signIn'}`} className="user_icon_box">
                                <FiUser style={{ fontSize: '26px' }} />
                            </Link>
                            <Link to={'/wishlist'} className="wish_icon_box">
                                <IoMdHeartEmpty style={{ fontSize: '26px' }} />
                                {wishList.length > 0 &&
                                    <span className='wish_length'>{wishList.length}</span>}
                            </Link>
                            <Link to={'/shoppingCart'} className="cart_icon_box">
                                <PiBag style={{ fontSize: '26px' }} />
                                {cartItems.length > 0 &&
                                    <span className='cart_length'>{cartItems.length}</span>}
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
        </div>
    )
}

export default memo(Navlinks)
