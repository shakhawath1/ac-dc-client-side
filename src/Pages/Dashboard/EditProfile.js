import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const EditProfile = () => {
    const { email } = useParams();
    const [user, setUser] = useState({});
    const { register, handleSubmit, reset } = useForm();


    // get user
    useEffect(() => {
        fetch(`https://sheltered-cliffs-05732.herokuapp.com/user/${email}`, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setUser(data)
            })
    }, [email]);

    // edit profile function
    const updateProfile = (data) => {
        fetch(`https://sheltered-cliffs-05732.herokuapp.com/user/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data) {
                    toast.success('User information added successfully.')
                    reset();
                }
                else {
                    toast.error('Failed to add user information!');
                };
            });
    };


    return (
        <div className='mx-2'>
            <h2 className='text-4xl text-lime-700 font-semibold text-center mt-8'>Edit Profile</h2>
            <div className="card bg-base-100 shadow-xl lg:w-2/4 md:w-3/4 mx-auto p-5 my-8">
                <h3 className='text-2xl text-slate-600 font-semibold text-center my-2'>User Information</h3>
                <form className='d-flex flex-column form-control' onSubmit={handleSubmit(updateProfile)}>
                    <label className="mb-1">Name</label>
                    <input className="input input-bordered w-full mb-3" value={user.name} type='text' {...register("name", { required: true, maxLength: 20 })} />
                    <label className="mb-1">Email</label>
                    <input className="input input-bordered w-full mb-3" value={user.email} type='text' {...register("email")} />
                    <label className="mb-1">Phone</label>
                    <input className="input input-bordered w-full mb-3" type="number" placeholder='Phone'  {...register("phone")} required />
                    <label className="mb-1">Address</label>
                    <input className="input input-bordered w-full mb-3" type="text" placeholder='Address' {...register("address")} required />
                    <label className="mb-1">Image Url</label>
                    <input className="input input-bordered w-full mb-3" type="text" placeholder='Image Url' {...register("img")} />

                    <input className='btn btn-accent' type="submit" value="Update" />

                </form>

            </div>
        </div>
    );
};

export default EditProfile;