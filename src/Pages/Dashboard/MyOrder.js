import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrder = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        if (user) {
            const url = `http://localhost:5000/order/${user.email}`;
            fetch(url)
                .then(res => res.json())
                .then(data => setOrders(data.reverse()))
        }
    }, [user]);

    // delete item
    const orderDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `http://localhost:5000/order/${id}`;
            console.log(url)
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = orders.filter(order => order._id !== id);
                    setOrders(remaining);
                });
        };

    };

    // payment an order
    const handlePayment = (id) => {
        console.log(id)
    }

    return (
        <div>
            <h3 className='text-3xl text-center mb-6'>My Order:{orders.length}</h3>
            <div class="overflow-x-auto mx-3">
                <table class="table table-compact w-full">
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
                            orders.map((order, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{order.name}</td>
                                <td className='text-center'>{order.price}</td>
                                <td className='text-center'>{order.quantity}</td>
                                <td className='text-center'>{order.totalPrice}</td>
                                <td className='text-center'><button onClick={() => orderDelete(order._id)} class="btn btn-sm btn-accent btn-outline">Pay Now</button></td>
                                <td className='text-center'><button onClick={() => handlePayment(order._id)} class="btn btn-sm btn-ghost">Cencel</button></td>
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