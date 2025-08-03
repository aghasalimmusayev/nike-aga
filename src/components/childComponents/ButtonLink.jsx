import React, { memo } from 'react'
import { Link } from 'react-router-dom'

function ButtonLink({ text, to = '/', onClick }) {
    return (
        <Link className='button_link' to={to} onClick={onClick}>{text}</Link>
    )
}

export default memo(ButtonLink)
