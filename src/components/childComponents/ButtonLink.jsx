import React, { memo } from 'react'
import { Link } from 'react-router-dom'

function ButtonLink({ text, to = '/' }) {
    console.log('ButtonLink rendered')
    return (
        <Link className='button_link' to={to}>{text}</Link>
    )
}

export default memo(ButtonLink)
