import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import { postRequestOptions } from '../constants';

const Register = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        postRequestOptions.body = JSON.stringify(data)  
        try {
            const response = await fetch('http://localhost:3000/api/register', postRequestOptions)
            const data = await response.json();
            console.log(data)
        } catch (error) {
            console.log(error)
        }

    };

    return (
        <div className='register-cover-main-wrapper'>
            <div className='container'>
                <div className='row d-flex justify-content-center align-items-center'>
                    <div className='col-lg-5'>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="username"
                                    name="firstName"
                                    {...register("firstName", { required: true, maxLength: 20 })}
                                    placeholder="Enter username"
                                    
                                />
                                {errors.firstName && <span className='error-msg'>This field is required</span>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="username"
                                    name="lastName"
                                    {...register("lastName", { required: true, maxLength: 20 })}
                                    placeholder="Enter username"
                                    
                                />
                                {errors.lastName && <span className='error-msg'>This field is required</span>}
                            </div>

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
                                <input type="email" {...register("email", { required: true, pattern: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/ })} />

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

                            <div className="form-group">
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    placeholder="Confirm Password"
                                    {...register("confirmPassword", { required: true, validate: value => value === watch("password") })}
                                />
                                {errors.confirmPassword && <span className='error-msg'>Passwords do not match</span>}

                            </div>

                            <button type="submit" className="btn btn-primary">
                                Signup
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
