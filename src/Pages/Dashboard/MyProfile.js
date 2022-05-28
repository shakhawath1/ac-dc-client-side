import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

import auth from '../../firebase.init';



const MyProfile = () => {
    const [user] = useAuthState(auth);
    const [dbUser, setDbUser] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const { email } = user;
        fetch(`https://sheltered-cliffs-05732.herokuapp.com/user/${email}`, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setDbUser(data)
            })
    }, [user]);
    const navigateToEdit = (email) => {
        navigate(`edit-profile/${email}`)
    }
    const { email, name, phone, img, address } = dbUser;



    return (
        <div>
            <h2 className='text-3xl text-center mb-6'>My Profile</h2>
            <div>
                <div>
                    <img class="mask mask-squircle mx-auto" src={img} alt='' />
                    <div class="card bg-base-100 shadow-xl lg:mx-20">
                        <div class="card-body">
                            <h2 class="card-title">{name}</h2>
                            <p>{email}</p>
                            <p>{phone}</p>
                            <p>{address}</p>
                            <button onClick={() => navigateToEdit(email)} class="btn btn-outline btn-accent btn-xs w-40 mx-auto">Edit profile</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;