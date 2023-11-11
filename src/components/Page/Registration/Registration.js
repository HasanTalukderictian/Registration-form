import React, { useContext } from 'react';

import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Provider/AuthProvider';

const Registration = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const {createUser} = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = data => {

        console.log(data);
        createUser(data.email, data.password)
        .then(result => {
            const loggedUser = result.user;
            const user ={
                email: loggedUser.email
            }
            console.log(user);

            // reset()
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your are Sign Up successfully',
                showConfirmButton: false,
                timer: 2500
              })

             

              navigate('/');

        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">

            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <h1 className="text-5xl font-bold">Sign Up Here!</h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text"  {...register("name", { required: true })} placeholder="name" name='name' className="input input-bordered"  />
                        {errors.name && <span className="text-red-600">Name is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email"  {...register("email", { required: true })} name='email' placeholder="email" className="input input-bordered"  />
                        {errors.email && <span className="text-red-600">Email is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password"  {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{6}/
                                })}
                                    name='password' placeholder="password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <p className='text-red-600'>
                                    Password Must be 6 character required </p>}

                                {errors.password?.type === 'minLength' && <p className='text-red-600'>
                                    Password Must be 6 character required </p>}

                                {errors.password?.type === 'maxLength' && <p className='text-red-600'>
                                    Password  Maximum 20 character</p>}
                                {errors.password?.type === 'pattern' && <p className='text-red-600'>
                                    Must be One  uppercase letter one special case letter one digits one lowercase letters string is of length 6 </p>}
                       
                    </div>
                    <div className="form-control mt-6">

                        <input className="btn btn-primary" type="submit" value="Sign Up" />
                    </div>
                  
                </form>
            </div>
        </div>
    );
};

export default Registration;