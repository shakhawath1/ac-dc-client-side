import React, { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    const emailRef = useRef()
    // google login
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth, { sendEmailVerification: true });

    // email & password log in
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

    // password reset methode 
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    let signInError;
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    if (user || gUser) {
        navigate(from, { replace: true });
    };

    if (error || gError) {
        signInError = <p className='text-red-500'><small>{error?.message || gError?.message}</small></p>
    };

    if (loading || gLoading || sending) {
        return <Loading></Loading>
    }
    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password);
        reset();
    };

    //  handle password reset methode 
    const resetPassword = async () => {
        const email = emailRef?.current?.value;
        console.log(email)
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('please enter your email address');
        }
    };

    return (
        <div className='flex justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl my-5">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Log In</h2>
                    <form onSubmit={handleSubmit(onSubmit)} >

                        {/* email input-field */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input ref={emailRef}
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
                            <button
                                onClick={resetPassword}
                                className="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out"
                            >Forgot password?</button>
                        </div>
                        <input className='btn w-full amx-w-xs' type="submit" value='log in' />
                    </form>

                    {/* not have an account */}
                    <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                        Don't have an account?
                        <Link className='text-rose-500 ml-2' to="/signup">Create an Account</Link>
                    </p>
                    <div className="divider">OR</div>

                    {/* google sign in */}
                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline">Continue with google</button>
                </div>
                {/* password reset toast  */}
                <ToastContainer />
            </div>

        </div>
    );
};

export default Login;