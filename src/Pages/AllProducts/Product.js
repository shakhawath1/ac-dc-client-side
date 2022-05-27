import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    const { _id, img, name, description, price, available, minimum_order } = product;
    const navigate = useNavigate();


    const navigateToPurchase = (id) => {
        navigate(`/purchase/${id}`)
    }


    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={img} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <p className='font-semibold'>Price: {price}</p>
                <p className='font-semibold'>Available: {available}</p>
                <p className='font-semibold'>Minimum Order: {minimum_order}</p>
                <div className="card-actions justify-end">
                    <button
                        onClick={() => navigateToPurchase(_id)}
                        className="btn" disabled={parseInt(available) < parseInt(minimum_order)}>Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;