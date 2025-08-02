import React, { useEffect, useRef, useState } from 'react'
import Logo from '../../childComponents/Logo'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getNavigationsLinks } from '../../../redux/NavigationSlice'

function Navigations() {
    console.log('Navigation render')
    const [items, setItems] = useState(false)
    const itemsRef = useRef([])
    const dispatch = useDispatch()
    const { navigationData } = useSelector(state => state.navigation)
    useEffect(() => {
        dispatch(getNavigationsLinks())
    }, [dispatch])
    function itemToggle(index) {
        console.log('itemToggle render')
        const item = itemsRef.current[index]
        if (!item) return
        if (items === index) {
            item.style.height = '0px';
            setItems(null);
        }
        else {
            if (items !== null && itemsRef.current[items]) itemsRef.current[items].style.height = '0px';
            item.style.height = item.scrollHeight + 'px';
            setItems(index)
        }
    }

    return (
        <div className="container">
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
                                <h3 onClick={() => itemToggle(item.id)}>{item.name}</h3>
                                <div ref={el => itemsRef.current[item.id] = el} className="navigation_content_items">
                                    {item.items?.map((element, index) => (
                                        <Link to={'/'} key={index}>{element}</Link>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Navigations
