import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getFooterLinks } from '../redux/FooterSlice'
import { IoIosArrowDown } from "react-icons/io";
import CountryBtn from './childComponents/CountryBtn'
import Guides from './childComponents/Footer children/Guides'

function Footer({ openCModal }) {

    const [guides, setGuides] = useState(false)
    const [accActive, setAccActive] = useState(null)
    const { footerData } = useSelector(state => state.footer)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getFooterLinks())
    }, [])
    function showGuides() {
        setGuides(true)
    }
    function hideGuides() {
        setGuides(false)
    }
    const contentRef = useRef([])
    const contentIconRef = useRef([])
    const toggleContent = (index) => {
        const content = contentRef.current[index];
        const icon = contentIconRef.current[index];
        if (!content || !icon) return;
        if (accActive === index) {
            content.style.height = '0px';
            icon.style.transform = 'rotate(0deg)';
            setAccActive(null);
        } else {
            if (accActive !== null && contentRef.current[accActive]) {
                contentRef.current[accActive].style.height = '0px';
                contentIconRef.current[accActive].style.transform = 'rotate(0deg)';
            }
            content.style.height = content.scrollHeight + 'px';
            icon.style.transform = 'rotate(180deg)';
            setAccActive(index);
        }
    }

    return (
        <footer>
            <div className="container">
                <hr />
                <div className="footer_content_box">
                    {footerData?.map((item, index) => (
                        <div className="footer_content" key={item.id}>
                            <h3 onClick={() => toggleContent(index)}>
                                <span>{item.name}</span>
                                <div className="footer_content_icon">
                                    <IoIosArrowDown
                                        ref={el => contentIconRef.current[index] = el}
                                        style={{ fontSize: "20px", color: "#111", transition: '0.3s' }}
                                    />
                                </div>
                            </h3>
                            <div
                                className="footer_content_items"
                                ref={el => contentRef.current[index] = el}>
                                {item.items?.map((element, index) => (
                                    <Link to={'/'} key={index}>{element}</Link>
                                ))}
                            </div>
                        </div>
                    ))}
                    <div className="location_btn">
                        <CountryBtn openCModal={openCModal} />
                    </div>
                </div>
                <div className="last_line">
                    <p>© {new Date().getFullYear()} Nike, Inc. All Rights Reserved</p>
                    <div
                        className='guides'
                        onMouseOver={showGuides}
                        onMouseLeave={hideGuides}>
                        <p>
                            <span>Guides</span>
                            <IoIosArrowDown style={{ fontSize: "18px" }} />
                        </p>
                        {guides && <Guides />}
                    </div>
                    <Link to={'/'}>Terms of Sale</Link>
                    <Link to={'/'}>Terms of Use</Link>
                    <Link to={'/'}>Nike Privacy Policy</Link>
                    <Link to={'/'}>Your Privacy Choices</Link>
                    <Link to={'/'}>CA Supply Chains Art</Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer

