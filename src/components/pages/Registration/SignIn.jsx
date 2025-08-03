import React, { useEffect, useState } from 'react'
import './reg.css'
import { Link, useNavigate } from 'react-router-dom'
import { loginUser } from '../../../service/regService'
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

function SignIn() {

    useEffect(() => {
        document.title = 'Log in - Nike.com'
    }, [])
    const navigate = useNavigate()
    const [type, setType] = useState(false)
    const [user, setUser] = useState({
        email: '',
        password: ''
    })
    function toggleType() {
        setType(!type)
    }
    function getValues(e) {
        setUser({
            ...user, [e.target.name]: e.target.value
        })
    }
    function loginSubmit(e) {
        e.preventDefault()
        if (!user.email || !user.password) {
            alert('Please fill all fiels!')
            return
        }
        loginUser(user)
            .then(item => {
                localStorage.setItem("user", JSON.stringify(item))
                setUser({
                    email: '',
                    password: ''
                })
                if (item.role === 'SuperAdmin') navigate('/Admin')
                else navigate('/')
            })
            .catch(err => {
                alert('Your email or password is not correct');
                console.error('Login error:', err);
            })
    }

    return (
        <div className='auth_box'>
            <form onSubmit={loginSubmit} className="authentication" >
                <h2 className='auth_head'>Welcome to Nike</h2>
                <input
                    name='email'
                    type="email"
                    value={user.email}
                    onChange={getValues}
                    placeholder='Email'
                    autoFocus
                />
                <div className="password_inp">
                    <input
                        name='password'
                        value={user.password}
                        type={type ? 'text' : 'password'}
                        onChange={getValues}
                        placeholder='Parol'
                    />
                    {type
                        ? <div className="eye_icon"><FaRegEye onClick={toggleType} /></div>
                        : <div className="eye_icon"><FaEyeSlash onClick={toggleType} /></div>}
                </div>
                <button type='submit' className='reg_btn'>Log in</button>
                <div className='go_to_signup'>
                    <Link to={'/signUp'}>Create an account</Link>
                    <span>or</span>
                    <Link to={'/'}>Continue as a Guest</Link>
                </div>
            </form>
        </div>
    )
}

export default SignIn
