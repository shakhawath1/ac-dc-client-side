import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    const { _id, img, name, price, available, minimum_order } = product;
    const navigate = useNavigate();


    const navigateToPurchase = (id) => {
        navigate(`/purchase/${id}`)
    }


    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Price: {price}</p>
                <p>Available: {available}</p>
                <p>Minimum Order: {minimum_order}</p>
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