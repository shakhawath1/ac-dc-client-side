import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        if (user) {
            fetch('https://sheltered-cliffs-05732.herokuapp.com/order/')
                .then(res => res.json())
                .then(data => setOrders(data.reverse()))
        }
    }, [user]);

    // delete item
    const orderCencel = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://sheltered-cliffs-05732.herokuapp.com/order/${id}`;
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
            <h3 className='text-3xl text-center mb-6'>All Orders: {orders.length}</h3>
            <div class="overflow-x-auto mx-3">
                <table class="table table-compact w-full">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th className='text-center'>Client Name</th>
                            <th className='text-center'>Email</th>
                            <th className='text-center'>Product Name</th>
                            <th className='text-center'>Payment Staus</th>
                            <th className='text-center'>Order Status</th>
                            <th className='text-center'>Cencel Order</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{order.clientName}</td>
                                <td className='text-center'>{order.email}</td>
                                <td className='text-center'>{order.name}</td>
                                <td className='text-center'>Pending</td>
                                <td className='text-center'><button onClick={() => handlePayment(order._id)} class="btn btn-sm btn-accent btn-outline">Pending</button></td>
                                <td className='text-center'><button onClick={() => orderCencel(order._id)} class="btn btn-sm btn-ghost">Cencel</button></td>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageAllOrders;