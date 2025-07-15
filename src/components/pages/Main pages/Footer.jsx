import React, { useEffect } from 'react'
import Logo from '../../childComponents/Logo'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getFooterLinks } from '../../../redux/FooterSlice'

function Footer() {

    const dispatch = useDispatch()
    const { footerData } = useSelector(state => state.footer)
    useEffect(() => {
        dispatch(getFooterLinks())
    }, [])

    return (
        <footer>
            <div className="top_navigations">
                <Logo />
                <div className="footer_links">
                    <Link to={'/'}>Find a Store</Link>
                    <Link to={'/'} >Help</Link>
                    <Link to={'/'}>Join Us</Link>
                    <Link to={'/signIn'}>Sign In</Link>
                </div>
                <div className="footer_content_box">
                    {footerData?.map(item => (
                        <div className='f_content' key={item.id}>
                            <h3>{item.name}</h3>
                            {item.items?.map((element, index) => (
                                <Link to={'/'} key={index}>{element}</Link>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    )
}

export default Footer
