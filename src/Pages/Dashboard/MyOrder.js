import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrder = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            fetch(`https://sheltered-cliffs-05732.herokuapp.com/order/${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/');
                    }
                    return res.json()
                })
                .then(data => setOrders(data))
        }
    }, [user, navigate]);

    // delete item
    const deleteOrder = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://sheltered-cliffs-05732.herokuapp.com/order/${id}`;
            fetch(url, {
                method: 'DELETE',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = orders.filter(order => order._id !== id);
                    setOrders(remaining);
                });
        };

    };



    return (
        <div>
            <h3 className='text-3xl text-center mb-6'>My Order:{orders.length}</h3>
            <div className="overflow-x-auto mx-3">
                <table className="table table-compact w-full">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th className='text-center'>Name</th>
                            <th className='text-center'>Unite Price</th>
                            <th className='text-center'>Quantity</th>
                            <th className='text-center'>Total Price</th>
                            <th className='text-center'>Pamayent Status</th>
                            <th className='text-center'>Cencel Order</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <tr key={order._id}>
                                <th>{index + 1}</th>
                                <td>{order.name}</td>
                                <td className='text-center'>{order.price}</td>
                                <td className='text-center'>{order.quantity}</td>
                                <td className='text-center'>{order.totalPrice}</td>
                                <td className='text-center'><Link to={`/dashboard/payment/${order._id}`}>
                                    <button className="btn btn-xs btn-accent btn-outline">Pay Now</button> </Link></td>
                                <td className='text-center'><button onClick={() => deleteOrder(order._id)} className="btn btn-xs btn-error btn-outline">Cencel</button></td>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;