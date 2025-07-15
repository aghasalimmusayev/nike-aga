import React from 'react'
import { Link } from 'react-router-dom'

function ButtonLink({ text, to = '/' }) {
    return (
        <Link className='button_link' to={to}>{text}</Link>
    )
}

export default ButtonLink
