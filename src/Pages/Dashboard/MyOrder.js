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

    return (
        <div>
            <h3 className='text-3xl text-center mb-6'>My Order:{orders.length}</h3>
            <div class="overflow-x-auto mx-3">
                <table class="table table-compact w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Unite Price</th>
                            <th>Quantity</th>
                            <th>Total Price</th>
                            <th>Pamayent Status</th>
                            <th>Cencel Order</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => <tr>
                                <th>1</th>
                                <td>{order.name}</td>
                                <td>{order.price}</td>
                                <td>{order.quantity}</td>
                                <td>{order.totalPrice}</td>
                                <td>12/16/2020</td>
                                <td>Blue</td>
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