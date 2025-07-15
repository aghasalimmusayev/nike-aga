import React from 'react'
import jordan1 from '../../../assets/img/jordan.jpg'
import jordan2 from '../../../assets/img/jordan2.jpg'
import ButtonLink from '../../childComponents/ButtonLink'
import '../pageCss/mainPage.css'
import { Link } from 'react-router-dom'

function JordanPic() {
    return (
        <div className='jordan_pics'>
            <Link className="jordan" to={'/'}>
                <img src={jordan1} alt="jordan" />
                <div className="jordan_content">
                    <p className='jordan_text'>Air Jordan 3 'Starfish'</p>
                    <h4 className='jordan_heading'>Light Work, Hevvy Hiter</h4>
                    <ButtonLink to='/' text='Shop' />
                </div>
            </Link>
            <Link className="jordan" to={'/'}>
                <img src={jordan2} alt="jordan" />
                <div className="jordan_content">
                    <p className='jordan_text'>Nike Universa</p>
                    <h4 className='jordan_heading'>Jordan Chiles` Go-To Leggings</h4>
                    <ButtonLink to='/' text='Shop' />
                </div>
            </Link>
        </div>
    )
}

export default JordanPic
