import React from 'react'
import ButtonLink from '../../../childComponents/ButtonLink'
import sekil1 from '../../../../assets/img/sneakers1.jpg'
import sekil2 from '../../../../assets/img/sneakers2.jpg'
import sekil3 from '../../../../assets/img/sneakers3.jpg'

function MemberBenefit() {
    return (
        <div className="container">
            <div className='member_box'>
                <h2 className='member_header'>Member Benefits</h2>
                <div className="benefit_content">
                    <div className="benefit">
                        <img src={sekil1} alt="benefitPhoto" />
                        <div className="benefit_text">
                            <h5>SNKRS</h5>
                            <h4>Your Ultimate Sneaker Community</h4>
                            <ButtonLink to='/' text={'Explore'} />
                        </div>
                    </div>
                    <div className="benefit second_one">
                        <img src={sekil3} alt="benefitPhoto" />
                        <div className="benefit_text">
                            <h5>Nike By You</h5>
                            <h4>Your Customization Service</h4>
                            <ButtonLink to='/' text={'Celebrate'} />
                        </div>
                    </div>
                    <div className="benefit">
                        <img src={sekil2} alt="benefitPhoto" />
                        <div className="benefit_text">
                            <h5>Nike Run Club</h5>
                            <h4>Let`s Run Together</h4>
                            <ButtonLink to='/' text={'Explore'} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MemberBenefit
