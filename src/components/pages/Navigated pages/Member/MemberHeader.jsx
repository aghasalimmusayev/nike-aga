import React from 'react'
import memberday from '../../../../assets/img/membership.avif'
import ButtonLink from '../../../childComponents/ButtonLink'

function MemberHeader() {
    console.log('MemberHeader + rendered')

    return (
        <div>
            <div className="container">
                <div className="membership_text">
                    <h2>Nike Membership</h2>
                    <ButtonLink to='/' text={'Sign Up'} />
                </div>
            </div>
            <div className="signUp_header">
                <img src={memberday} alt="memberday" />
                <div className="signUp_header_content">
                    <div className="container">
                        <h1>it`s better as a member</h1>
                        <p>Move, Shop, Customize and Celebrate with the best of Nike.</p>
                        <ButtonLink to='/signUp' text={'Sign Up'} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MemberHeader
