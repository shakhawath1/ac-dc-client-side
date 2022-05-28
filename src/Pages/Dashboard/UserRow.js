import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ index, user, refetch }) => {
    const { email, role } = user;
    if (email) {

    }

    // make admin function
    const makeAdmin = () => {
        fetch(`https://sheltered-cliffs-05732.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to Make an admin');
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success('Successfully made an admin');
                }
            })
    }

    return (
        <tr key={user._id}>
            <th>{index + 1}</th>
            <td>{user.name}</td>
            <td className='text-center'>{user.email}</td>
            <td className='text-center text-green-600'>{(role === 'admin' && 'Admin') || (role !== 'admin' && 'User')}</td>
            <td className='text-center'>{role !== 'admin' && <button onClick={makeAdmin} className="btn btn-xs btn-success btn-outline">Make Admin</button>}</td>
        </tr >
    );
};

export default UserRow;