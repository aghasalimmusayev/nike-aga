import React from 'react'
import { Link } from 'react-router-dom'
import ButtonLink from '../../childComponents/ButtonLink'
import nikeRunning from '../../../assets/img/nike_running.webp'
import nikeTennis from '../../../assets/img/nike_tennis.jpg'
import nikeGolf from '../../../assets/img/nike_golf.jpg'

function NikeFields() {
    return (
        <div className="container">
            <div className='nike_fields'>
                <div className='nikeField'>
                    <Link to={'/'}>
                        <img src={nikeRunning} alt="nikeField" />
                    </Link>
                    <div className="field_btn">
                        <ButtonLink text='Shop Runnig' to='/products/Sport' />
                    </div>
                </div>
                <div className='nikeField'>
                    <Link to={'/'}>
                        <img src={nikeTennis} alt="nikeField" />
                    </Link>
                    <div className="field_btn">
                        <ButtonLink text='Shop Tennis' to='/products/Sport' />
                    </div>
                </div>
                <div className='nikeField'>
                    <Link to={'/'}>
                        <img src={nikeGolf} alt="nikeField" />
                    </Link>
                    <div className="field_btn">
                        <ButtonLink text='Shop Golf' to='/products/Sport' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NikeFields
