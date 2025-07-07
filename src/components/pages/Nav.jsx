import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { getNavlinks } from '../../redux/LinksDataSlice'

function Nav() {

    const { linkData } = useSelector(store => store.links)
    const dispastch = useDispatch()

    useEffect(() => {
        dispastch(getNavlinks())
    }, [])

    return (
        <div>
            {linkData?.map(item => (
                <NavLink key={item.id} to={'/'}>{item.name}</NavLink>
            ))}
        </div>
    )
}

export default Nav
