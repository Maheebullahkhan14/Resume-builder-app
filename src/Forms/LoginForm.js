import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import { postRequestOptions } from '../constants';
import { useNavigate } from 'react-router-dom';
import { toast, Toaster } from 'react-hot-toast';

const LoginForm = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const API_URL = process.env.REACT_APP_API_URL;

    const onSubmit = async (data) => {
        postRequestOptions.body = JSON.stringify(data)
        try {
            const response = await fetch('${API_URL}/api/login', postRequestOptions)
            const res = await response.json();
            if (res.status === 200) {
                if (res.userId) {
                    localStorage.setItem('userId', JSON.stringify(res.userId));
                    toast.success(res.msg);
                    setTimeout(() => {
                        navigate('/dashboard')
                    }, 500);
                }
            }
        } catch (error) {
            console.log(error)
        }

    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className='form-content-cover-wrapper'>
                <h5>Welcome back</h5>
                <div className="form-group">
                    <label htmlFor="email">Email </label>
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
            <Toaster />
        </>
    )
}

export default LoginForm
