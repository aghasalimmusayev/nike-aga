import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getFooterLinks } from '../../../redux/FooterSlice'
import { IoIosArrowDown } from "react-icons/io";
import CountryBtn from '../../childComponents/CountryBtn'
import Guides from '../../childComponents/Footer children/Guides'

function Footer({ openCModal }) {

    const [guides, setGuides] = useState(false)
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

    return (
        <footer>
            <div className="container">
                <hr />
                <div className="footer_content_box">
                    {footerData?.map(item => (
                        <div className="footer_content" key={item.id}>
                            <h3>{item.name}</h3>
                            {item.items?.map((element, index) => (
                                <Link to={'/'} key={index}>{element}</Link>
                            ))}
                        </div>
                    ))}
                    <CountryBtn openCModal={openCModal} />
                </div>
                <div className="last_line">
                    <p>© {new Date().getFullYear()} Nike, Inc. All Rights Reserved</p>
                    <div
                        className='guides'
                        onMouseOver={showGuides}
                        onMouseLeave={hideGuides}>
                        <p>
                            <span>Guides</span>
                            <IoIosArrowDown style={{ fontSize: "18px", marginTop: '3px' }} />
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
