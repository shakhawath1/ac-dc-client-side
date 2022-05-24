import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password);
        console.log(data)
    };
    const navigate = useNavigate();
    if (user) {
        navigate('/home');
    }
    if (errors || error) {
        console.log(errors)
    };
    if (loading) {
        console.log(loading)
    }


    return (
        <div className="md:w-8/12 lg:w-5/12 mx-auto">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div class="form-control w-full max-w-xs mb-6 mx-auto">
                    <input type="text"
                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-600 focus:outline-none"
                        placeholder="Email address" {...register("email", {
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
                </div>

                <div class="form-control w-full max-w-xs mb-6 mx-auto">
                    <input type="password"
                        class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-slate-600 focus:outline-none"
                        placeholder="Password" {...register("password", {
                            required: {
                                value: true,
                                message: 'Password is Required'
                            },
                            minLength: {
                                value: 6,
                                message: 'Must be 6 characters or longer'
                            }
                        })}
                    />
                </div>

                <input
                    type="submit"
                    class="inline-block px-7 py-3 bg-slate-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-slate-700 hover:shadow-lg focus:bg-slate-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-slate-800 active:shadow-lg transition duration-150 ease-in-out w-full max-w-xs"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                />
                {/* Sign in
                </input> */}
            </form>
        </div>
    );
};

export default Login;