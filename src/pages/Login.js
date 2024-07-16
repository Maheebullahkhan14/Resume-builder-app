import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import { postRequestOptions } from '../constants';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        postRequestOptions.body = JSON.stringify(data)  
        try {
            const response = await fetch('http://localhost:3000/api/login', postRequestOptions)
            const res = await response.json();
            if(res.status === 200){
                if(res.userId){
                    localStorage.setItem('userId' , JSON.stringify(res.userId));
                    navigate('/dashboard')
                }
            }
        } catch (error) {
            console.log(error)
        }

    };

    return (
        <div className='register-cover-main-wrapper login-main-cover-wrapper'>
            <div className='container'>
                <div className='row d-flex justify-content-center align-items-center'>
                    <div className='col-lg-4'>

                    </div>
                    <div className='col-lg-5'>
                        <form onSubmit={handleSubmit(onSubmit)} className='form-content-cover-wrapper'>
                            <div className="form-group">
                                <label htmlFor="email">Email address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    {...register("email", { required: true, pattern: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/ })}
                                    placeholder="Enter email"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    name="password"
                                    placeholder="Password"
                                    {...register("password", { required: true, minLength: 6 })}
                                />
                                {errors.password && <span className='error-msg'>Password must be at least 8 characters</span>}

                            </div>

                            

                            <button type="submit" className="btn btn-primary">
                                Login
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
