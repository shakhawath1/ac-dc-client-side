import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';


const Login = () => {
    // google login
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    // email & password log in
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
    let signInError;

    if (user || gUser) {

    };

    if (error || gError) {
        signInError = <p className='text-red-500'><small>{error?.message || gError?.message}</small></p>
    };

    if (loading || gLoading) {
        return <Loading></Loading>
    }
    const onSubmit = data => {
        console.log(data)
        signInWithEmailAndPassword(data.email, data.password)
    };

    return (
        <div className='flex justify-center h-screen items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Log In</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        {/* email input-field */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email" placeholder="Email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid Email'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>

                        {/* password input-field */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password" placeholder="Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    minLength: {
                                        value: 8,
                                        message: 'Must be 8 characters or longer'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>
                        {signInError}
                        <div className="flex justify-between items-center mb-6">
                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <input type="checkbox" className="checkbox checkbox-accent checkbox-xs mr-2" />
                                    <span className="label-text">Remember me</span>
                                </label>
                            </div>
                            <a
                                href="#!"
                                className="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out"
                            >Forgot password?</a
                            >
                        </div>
                        <input className='btn w-full amx-w-xs' type="submit" value='log in' />
                    </form>
                    <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                        Don't have an account?
                        <a
                            href="#!"
                            className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out ml-2"
                        >Create an Account</a>
                    </p>
                    <div className="divider">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline">Continue with google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;