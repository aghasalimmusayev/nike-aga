import React, { memo, useState } from 'react'
import { HiOutlineXMark } from "react-icons/hi2";
import { Link } from 'react-router-dom';
import { SlArrowRight } from "react-icons/sl";
import { SlArrowLeft } from "react-icons/sl";
import { useSelector } from 'react-redux';
import NikeManLogo from './NikeManLogo';
import NikeArrowIcon from './NikeArrowIcon';
import { IoHelpCircleOutline } from "react-icons/io5";
import { IoBagOutline } from "react-icons/io5";
import { VscFolder } from "react-icons/vsc";
import { LuCalendarHeart } from "react-icons/lu";
import { SlUserFollowing } from "react-icons/sl";

function MobileNav({ menuBar, setMenuBar, user, toggleDashModal }) {
    const { linkData } = useSelector(store => store.links)
    const [menuStep, setMenuStep] = useState(0);
    const [selectedLink, setSelectedLink] = useState(null);
    const [selectedTitle, setSelectedTitle] = useState(null);

    function goBack() {
        if (menuStep === 2) {
            setSelectedTitle(null);
            setMenuStep(1);
        } else if (menuStep === 1) {
            setSelectedLink(null);
            setMenuStep(0);
        }
    }
    function handleLinkClick(link) {
        setSelectedLink(link);
        setMenuStep(1);
    }
    function handleTitleClick(title) {
        setSelectedTitle(title);
        setMenuStep(2);
    }

    return (
        <div className={`mobile_menu ${menuBar ? 'open' : ''}`}>
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
                    <SlArrowRight style={{ fontSize: '16px', color: '#111' }} />
                </button>
            ))}
            {menuStep === 1 && (
                <div className='link_titles'>
                    <Link
                        to={`/products/${selectedLink?.name}`}
                        onClick={() => setMenuBar(false)}
                        className="selected_link_title">{selectedLink?.name}
                    </Link>
                    <div className='titles'>
                        {selectedLink?.altCat.map((cat, index) => (
                            <button
                                key={index}
                                onClick={() => handleTitleClick(cat)}
                                className="menu_title">
                                <span>{cat.title}</span>
                                <SlArrowRight style={{ fontSize: '16px', color: '#111' }} />
                            </button>
                        ))}
                    </div>
                </div>
            )}
            {menuStep === 2 && (
                <div className='title_items'>
                    <Link to={'/'}>{selectedTitle?.title}</Link>
                    {selectedTitle?.items.map((item, index) => (
                        <Link to="/" key={index} className="menu_item" onClick={() => setMenuBar(false)}>
                            {item}
                        </Link>
                    ))}
                </div>
            )}
            <div className="nike_logos">
                <Link to={'/'}><NikeManLogo width={'30px'} height={'30px'} /></Link>
                <Link to={'/'}><NikeArrowIcon width={'30px'} height={'30px'} /></Link>
            </div>
            <p className='becom_member'>Become a Nike Member for the best products, inspriration and stories in sport.
                <Link onClick={() => setMenuBar(false)} to={'/'}> Learn more</Link></p>
            {user
                ? <div className='user_name' onClick={toggleDashModal}>
                    <SlUserFollowing />
                    <span>{user.name} {user.surname}</span>
                </div>
                : <div className="auth_btns">
                    <Link onClick={() => setMenuBar(false)} to={'/signUp'}>Join Us</Link>
                    <Link onClick={() => setMenuBar(false)} to={'/signIn'}>Sign In</Link>
                </div>}
            <div className="mobile_navigations">
                <Link to={'/'}>
                    <VscFolder />
                    <span>Orders</span>
                </Link>
                <Link to={'/shoppingCart'}>
                    <IoBagOutline />
                    <span>Bag</span>
                </Link>
                <Link to={'/wishlist'}>
                    <LuCalendarHeart />
                    <span>Favorites</span>
                </Link>
                <Link to={'/'}>
                    <IoHelpCircleOutline />
                    <span>Help</span>
                </Link>
            </div>
        </div>
    )
}

export default memo(MobileNav)
