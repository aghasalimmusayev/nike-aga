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
                <Link className='nikeField' to={'/'}>
                    <img src={nikeRunning} alt="nikeField" />
                    <div className="field_btn">
                        <ButtonLink text='Shop Runnig' to='/' />
                    </div>
                </Link>
                <Link className='nikeField' to={'/'}>
                    <img src={nikeTennis} alt="nikeField" />
                    <div className="field_btn">
                        <ButtonLink text='Shop Tennis' to='/' />
                    </div>
                </Link>
                <Link className='nikeField' to={'/'}>
                    <img src={nikeGolf} alt="nikeField" />
                    <div className="field_btn">
                        <ButtonLink text='Shop Golf' to='/' />
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default NikeFields
