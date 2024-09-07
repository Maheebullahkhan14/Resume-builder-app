import React from 'react'
import { postRequestOptions } from '../constants';

import { loginBg , loginShape1 } from '../Assets';
import LoginForm from '../Forms/LoginForm';
import RegisterForm from '../Forms/RegisterForm';
import { Link } from 'react-router-dom';

const Login = ({pagelink}) => {
    return (
        <div className='register-cover-main-wrapper login-main-cover-wrapper'>
            <div className='container'>
                <div className='row d-flex justify-content-center align-items-center'>
                    <div className='col-lg-7'>
                        <div className="login-innercover-main-wrapper">
                            {pagelink == "/login" ? <LoginForm/> : <RegisterForm/>}
                        </div>
                        {pagelink == "/login" && (
                            <Link to="/register" className='text-white font-400'>Not registered yet</Link>
                        )}
                    </div>
                </div>
            </div>
            <div className='bg-shape'>
                <img src={loginBg}></img>
            </div>
        </div>
    )
}

export default Login
