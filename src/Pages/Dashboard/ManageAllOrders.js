import React, { useEffect, useState } from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import auth from '../../firebase.init';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);


    useEffect(() => {

        fetch('https://sheltered-cliffs-05732.herokuapp.com/order/', {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setOrders(data))

    }, []);

    // delete item
    const orderCencel = id => {
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

    // payment an order
    const handlePayment = (id) => {
        console.log(id)
    }

    return (
        <div>
            <h3 className='text-3xl text-center mb-6'>All Orders: {orders.length}</h3>
            <div className="overflow-x-auto mx-3">
                <table className="table table-compact w-full">
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
                            orders.map((order, index) => <tr key={order._id}>
                                <th>{index + 1}</th>
                                <td>{order.clientName}</td>
                                <td className='text-center'>{order.email}</td>
                                <td className='text-center'>{order.name}</td>
                                <td className='text-center'>Pending</td>
                                <td className='text-center'><button onClick={() => handlePayment(order._id)} className="btn btn-xs btn-accent btn-outline">Pending</button></td>
                                <td className='text-center'><button onClick={() => orderCencel(order._id)} className="btn btn-xs btn-error btn-outline">Cencel</button></td>
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