import React, { useState } from 'react'
import './reg.css'
import NikeManLogo from '../../Nav/NikeManLogo'
import Logo from '../../childComponents/Logo'
import { Link, useNavigate } from 'react-router-dom'
import { nanoid } from 'nanoid'
import { registerUser } from '../../../service/regService'
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

function SignUp() {

    const navigate = useNavigate()
    const [type, setType] = useState(false)
    const [passwordAgain, setPasswordAgain] = useState('')
    const [user, setUser] = useState({
        id: nanoid(),
        name: '',
        surname: '',
        phone: '',
        email: '',
        password: '',
        gender: ''
    })
    function toggleType() {
        setType(!type)
    }
    function getValues(e) {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    console.log(user, passwordAgain)
    async function signUpSubmit(e) {
        e.preventDefault()
        if (user.password === passwordAgain) {
            const userData = {
                ...user,
                created: new Date().toDateString(),
                role: 'user',
                active: true
            }
            const result = await registerUser(userData)
            if (result) {
                setUser({
                    id: '',
                    name: '',
                    surname: '',
                    phone: '',
                    email: '',
                    password: '',
                    gender: ''
                })
                setPasswordAgain('')
                navigate('/signIn')
            }
        }
        else {
            alert('The password is not match')
        }
    }


    return (
        <div className='reg_box'>
            <form onSubmit={signUpSubmit} className="registration">
                <div className="signUp_logo">
                    <Logo />
                    <NikeManLogo width={'50px'} />
                </div>
                <h2 className='auth_head'>Enter your informations to join us or sign in.</h2>
                <input name='name' type="text" placeholder='Name' onChange={getValues} value={user.name} required />
                <input name='surname' type="text" placeholder='Surname' onChange={getValues} value={user.surname} required />
                <input name='phone' type="number" placeholder='Phone' onChange={getValues} value={user.phone} required />
                <input name='email' type="email" placeholder='Email' onChange={getValues} value={user.email} required />
                <div className="password_inp">
                    <input
                        name='password'
                        placeholder='Password'
                        onChange={getValues}
                        value={user.password}
                        required />
                    {type
                        ? <FaRegEye onClick={toggleType} />
                        : <FaEyeSlash onClick={toggleType} />}
                </div>
                <div className="password_inp">
                    <input
                        name='passwordAgain'
                        placeholder='Repeat password'
                        onChange={(e) => { setPasswordAgain(e.target.value) }}
                        value={passwordAgain}
                        required />
                    {type
                        ? <FaRegEye onClick={toggleType} />
                        : <FaEyeSlash onClick={toggleType} />}
                </div>
                <div className="gender">
                    <div className="male">
                        <label htmlFor="male">Male</label>
                        <input name='gender' id='male' type="radio" value="male" onChange={getValues} required />
                    </div>
                    <div className="female">
                        <label htmlFor="female">Female</label>
                        <input name='gender' id='female' type="radio" value="female" onChange={getValues} required />
                    </div>
                </div>
                <button className='reg_btn' type='submit'>Sign up</button>
                <div className='go_to_login'>
                    <div>
                        <span>Do you have an account already?</span>
                        <Link to={'/signIn'}>Sign in</Link>
                    </div>
                    <span>or</span>
                    <Link to={'/'}>Continue as a Guest</Link>
                </div>
            </form>
        </div>
    )
}

export default SignUp
