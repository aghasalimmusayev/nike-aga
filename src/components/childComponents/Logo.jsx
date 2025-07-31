import React, { memo } from 'react'
import logo from '../../assets/img/nike-logo.svg'

function Logo() {
    console.log('Logo rendered')
    return (
        <div className="logo"><img src={logo} alt="" /></div>
    )
}

export default memo(Logo)
