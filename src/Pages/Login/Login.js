import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";


const Login = () => {
    // email & password log in
    const { register, formState: { errors }, handleSubmit } = useForm();
    // google login
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    if (user) {

    };

    if (error) {

    };

    if (loading) {

    }
    const onSubmit = data => console.log(data);

    return (
        <div className='flex justify-center h-screen items-center'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="text-center text-2xl font-bold">Log In</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("firstName", { required: true })} />
                        {errors.firstName?.type === 'required' && "First name is required"}

                        <input {...register("lastName", { required: true })} />
                        {errors.lastName && "Last name is required"}

                        <input type="submit" />
                    </form>

                    <div class="divider">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        class="btn btn-outline">Continue with google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;