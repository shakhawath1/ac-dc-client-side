import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UserRow from './UserRow';

const MakeAdmin = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://sheltered-cliffs-05732.herokuapp.com/user/', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    };


    return (
        <div>
            <h3 className='text-3xl text-center mb-6'>All Users:{users.length}</h3>
            <div className="overflow-x-auto mx-3">
                <table className="table table-compact w-full lg:w-3/4 mx-auto">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th className='text-center'>Name</th>
                            <th className='text-center'>Email</th>
                            <th className='text-center'>Status</th>
                            <th className='text-center'>Admin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <UserRow
                                index={index}
                                key={user._id}
                                user={user}
                                refetch={refetch}
                            ></UserRow>)

                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MakeAdmin;