import React from 'react'
import { Link } from 'react-router-dom'

function Guides() {
    console.log('Guide rendered')
    return (
        <div className='guides_modal'>
            <Link to={'/'}>Nike Air</Link>
            <Link to={'/'}>Nike Air Force1</Link>
            <Link to={'/'}>Nike Air Max</Link>
            <Link to={'/'}>Nike FlyEase</Link>
            <Link to={'/'}>Nike Flyknit</Link>
            <Link to={'/'}>Nike Free</Link>
            <Link to={'/'}>Nike React</Link>
            <Link to={'/'}>Nike Vaporfly</Link>
            <Link to={'/'}>Nike ZoomX</Link>
            <Link to={'/'}>Space Hippie</Link>
        </div>
    )
}

export default Guides
