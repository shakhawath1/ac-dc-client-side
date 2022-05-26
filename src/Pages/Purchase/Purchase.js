import React, { useEffect, useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';

const Purchase = () => {
    const { Id } = useParams();
    const [product, setProduct] = useState({});
    const { img, name, price, available, minimum_order } = product;
    const [user] = useAuthState(auth)

    useEffect(() => {
        const url = `http://localhost:5000/product/${Id}`;
        console.log(url)
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [Id]);

    const quantiytRef = useRef('');
    const quantity = quantiytRef.current.value;

    const handleOrder = event => {
        event.preventDefault();
        // const quantity = event.target.quantity.value;
    };

    return (
        <div className='my-10'>
            <h2 className='text-2xl text-center font-bold text-slate-700 my-9'>Order for: {name}</h2>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 justify-center mx-4 md:mx-20 lg:mx-40'>
                <div className="card bg-base-100 shadow-xl">
                    <figure><img src={img} className='w-96' alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{name}</h2>
                        <div>
                            <p>Price: {price}</p>
                            <p>Available: {available}</p>
                            <p>Minimum Order: {minimum_order}</p>
                        </div>
                    </div>
                </div>
                <div class="card lg:w-full bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title">Order Information</h2>
                        <form onSubmit={handleOrder} className='grid grid-cols-1 gap-4'>
                            <input type="text" value={user.displayName} class="input input-bordered w-full" />
                            <input type="text" value={user.email} class="input input-bordered w-full" />
                            <input type="text" placeholder="Phone" class="input input-bordered w-full" required />
                            <input type="text" placeholder="Shipping adderss" class="input input-bordered w-full" required />
                            <div>
                                <label class="my-2">Quantity</label>
                                <input type="text" ref={quantiytRef} placeholder={minimum_order} class="input input-bordered w-full" />
                            </div>
                            <div>
                                <label class="mb-2">Total Price</label>
                                <input type="text" value={parseInt(price) * parseInt(quantity)} className="input input-bordered w-full" />
                            </div>
                            <input type="submit" value='place order' class="btn w-full" disabled={parseInt(quantity) < parseInt(minimum_order)} />
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;