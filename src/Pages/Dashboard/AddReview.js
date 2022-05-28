import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddReview = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit, reset } = useForm();
    const [dbUser, setDbUser] = useState({});

    useEffect(() => {
        fetch(`https://sheltered-cliffs-05732.herokuapp.com/user/`, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                const currentUser = data.find(dbUser => dbUser.email === user.email);
                setDbUser(currentUser);
            })
    }, [user.email]);

    const { name } = dbUser;

    // add a review
    const addReview = (data) => {
        fetch('https://sheltered-cliffs-05732.herokuapp.com/review/', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data) {
                    toast.success('Review added successfully.')
                    reset();
                }
                else {
                    toast.error('Failed to add review!');
                };
            });
    };


    return (
        <div className='mx-2'>
            <h2 className='text-4xl text-lime-700 font-semibold text-center mt-8'>Add Review</h2>
            <div className="card bg-base-100 shadow-xl lg:w-2/4 md:w-3/4 mx-auto p-5 my-8">
                {/* <h3 className='text-2xl text-slate-600 font-semibold text-center my-2'></h3> */}
                <form className='d-flex flex-column form-control' onSubmit={handleSubmit(addReview)}>
                    <label className="mb-1">Name</label>
                    <input className="input input-bordered w-full mb-3" value={name} type='text' {...register("name")} />
                    <label className="mb-1">Review</label>
                    <textarea className="input input-bordered w-full mb-3" placeholder='Write here' type='text' {...register("review")} />
                    <label className="mb-1">Ratings</label>
                    <input className="input input-bordered w-full mb-3" type="number" placeholder='Ratings'  {...register("ratings")} required />
                    {/* <div className="rating my-3">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div> */}

                    <input className='btn btn-accent' type="submit" value="add review" />

                </form>

            </div>
        </div>
    );
};

export default AddReview;