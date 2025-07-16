import React, { useEffect } from 'react'
import Logo from '../../childComponents/Logo'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getNavigationsLinks } from '../../../redux/NavigationSlice'


function Navigations() {

    const dispatch = useDispatch()
    const { navigationData } = useSelector(state => state.navigation)
    useEffect(() => {
        dispatch(getNavigationsLinks())
    }, [])

    return (
        <section id='navigations'>
            <div className="navigation_box">
                <Logo />
                <div className="navigation_links">
                    <Link to={'/'}>Find a Store</Link>
                    <Link to={'/'} >Help</Link>
                    <Link to={'/'}>Join Us</Link>
                    <Link to={'/signIn'}>Sign In</Link>
                </div>
                <div className="navigation_content_box">
                    {navigationData?.map(item => (
                        <div className='navigation_content' key={item.id}>
                            <h3>{item.name}</h3>
                            {item.items?.map((element, index) => (
                                <Link to={'/'} key={index}>{element}</Link>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Navigations
