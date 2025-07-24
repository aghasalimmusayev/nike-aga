import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { SlArrowDown } from "react-icons/sl";
import membershipLogo from '../../../../assets/img/membership_logo.png'

function MemberFag() {

    const [arrow, setArrow] = useState(null)
    const fagRef = useRef([])
    const fagIconRef = useRef([])
    const handleFag = (index) => {
        const content = fagRef.current[index];
        const icon = fagIconRef.current[index];
        if (!content || !icon) return;
        if (arrow === index) {
            content.style.height = '0px';
            icon.style.transform = 'rotate(0deg)';
            setArrow(null);
        } else {
            // if (arrow !== null && fagRef.current[arrow]) {
            //     fagRef.current[arrow].style.height = '0px';
            //     fagIconRef.current[arrow].style.transform = 'rotate(0deg)';
            // }
            content.style.height = content.scrollHeight + 'px';
            icon.style.transform = 'rotate(180deg)';
            setArrow(index);
        }
    }

    return (
        <div className="container">
            <div className='member_fag'>
                <h2 className='member_header'>Frequently Asked Questions</h2>
                <div className="mem_fag_content">
                    <div className="mem_fag">
                        <h3 onClick={() => handleFag(0)} >
                            <span>What is Nike Membership?</span>
                            <div className="fag_icon">
                                <SlArrowDown
                                    style={{ transition: '0.3s' }}
                                    ref={el => fagIconRef.current[0] = el} />
                            </div>
                        </h3>
                        <p className="mem_fag_answer" ref={el => fagRef.current[0] = el}>Nike Membership is access to the very best of Nike through any of our apps,
                            exclusive products, and Member-only experiences. Nike Members also enjoy free shipping on orders of $50 or more,
                            60-day Wear Test, and receipt-less returns. It’s free and easy to join. <Link to={'/signUp'}>Sign Up</Link></p>
                    </div>
                    <div className="mem_fag">
                        <h3 onClick={() => handleFag(1)} >
                            <span>Am I a Nike Member?</span>
                            <div className="fag_icon">
                                <SlArrowDown
                                    style={{ transition: '0.3s' }}
                                    ref={el => fagIconRef.current[1] = el} />
                            </div>
                        </h3>
                        <p className="mem_fag_answer" ref={el => fagRef.current[1] = el}>Maybe! If you’ve ever logged into a Nike app, then yes, yes you are.
                            Welcome back! If not, let’s change that. <Link to={'/signUp'}>Sign Up</Link></p>
                    </div>
                    <div className="mem_fag">
                        <h3 onClick={() => handleFag(2)} >
                            <span>Is Nike Membership free?</span>
                            <div className="fag_icon">
                                <SlArrowDown
                                    style={{ transition: '0.3s' }}
                                    ref={el => fagIconRef.current[2] = el} />
                            </div>
                        </h3>
                        <p className="mem_fag_answer" ref={el => fagRef.current[2] = el}>100% yes. Members enjoy all the benefits of Nike Membership at no cost,
                            because once you’re in, we got you. Zero money gets you access to all of it. <Link to={'/signUp'}>Sign Up</Link></p>
                    </div>
                </div>
            </div>
            <div className="membership_logo">
                <img src={membershipLogo} alt="membership" />
                <span>Membership</span>
            </div>
        </div>
    )
}

export default MemberFag
