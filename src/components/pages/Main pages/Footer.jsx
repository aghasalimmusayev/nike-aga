import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getFooterLinks } from '../../../redux/FooterSlice'
import CountryBtn from '../../childComponents/CountryBtn'

function Footer({ openCModal }) {

    const { footerData } = useSelector(state => state.footer)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getFooterLinks())
    }, [])

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
            </div>
        </footer>
    )
}

export default Footer
