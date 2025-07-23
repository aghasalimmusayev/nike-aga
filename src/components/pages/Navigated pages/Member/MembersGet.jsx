import React from 'react'
import nikeLogo from '../../../../assets/img/nike-logo-white.png'

function MembersGet() {
    return (
        <div className="members_info">
            <div className='container'>
                <h2 className='member_header'>Members Also Get</h2>
                <div className="members_info_content">
                    <div className="m_i_content">
                        <h5>Nike Experts</h5>
                        <p>Members can get sport and style advice from experts.</p>
                    </div>
                    <div className="m_i_content">
                        <h5>Member Experiences</h5>
                        <p>Join your community for live, Member-only events.</p>
                    </div>
                    <div className="m_i_content">
                        <h5>Recieptless Return</h5>
                        <p>Return or exchange receipt-free in-store or in the Nike App</p>
                    </div>
                    <div className="m_i_content">
                        <h5>Wear Test</h5>
                        <p>Not sure? Try it for 60 days-return if it`s not a fit. Excludes Nike Clearance stores.</p>
                    </div>
                    <div className="m_i_content">
                        <h5>Free Shipping</h5>
                        <p>Memebers score free delivery on every $50+ order.</p>
                    </div>
                </div>
            </div>
            <div className="membership_line">
                <div className="line_content">
                    <img src={nikeLogo} alt="logo" />
                    <h4>Membership</h4>
                </div>
                <div className="line_content">
                    <img src={nikeLogo} alt="logo" />
                    <h4>Membership</h4>
                </div>
                <div className="line_content">
                    <img src={nikeLogo} alt="logo" />
                    <h4>Membership</h4>
                </div>
                <div className="line_content">
                    <img src={nikeLogo} alt="logo" />
                    <h4>Membership</h4>
                </div>
                <div className="line_content">
                    <img src={nikeLogo} alt="logo" />
                    <h4>Membership</h4>
                </div>
            </div>
        </div>
    )
}

export default MembersGet
