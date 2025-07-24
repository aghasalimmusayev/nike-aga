import React from 'react'
import connect1 from '../../../../assets/img/connect1.jpg'
import connect2 from '../../../../assets/img/connect6.png'
import connect3 from '../../../../assets/img/connect3.png'
import connect4 from '../../../../assets/img/connect4.jpeg'
import { Link } from 'react-router-dom'

function MemberConnect() {
    return (
        <div className='container'>
            <h2 className='member_header'></h2>
            <div className="member_connect_content">
                <Link to={'/'} className="connect">
                    <img src={connect1} alt="connect" />
                    <h5>Nike App</h5>
                    <p>Keep up daily with the best of Nike, personalized for you.</p>
                    <span>Explore</span>
                </Link>
                <Link to={'/'} className="connect">
                    <img src={connect4} alt="connect" />
                    <h5>Nike Run Club</h5>
                    <p>Run with us in the Nike Run Club App.</p>
                    <span>Explore</span>
                </Link>
                <Link to={'/'} className="connect">
                    <img src={connect3} alt="connect" />
                    <h5>Nike Training Club</h5>
                    <p>Move with the best in the Nike Training Club App</p>
                    <span>Explore</span>
                </Link>
                <Link to={'/'} className="connect">
                    <img src={connect2} alt="connect" />
                    <h5>SNKRS</h5>
                    <p>Find the freshest drops in the SNKRS App</p>
                    <span>Explore</span>
                </Link>
            </div>
        </div>
    )
}

export default MemberConnect
