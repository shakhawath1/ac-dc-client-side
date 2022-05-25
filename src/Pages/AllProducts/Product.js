import React from 'react';

const Product = ({ product }) => {
    const { img, name, price, available, minimum_order } = product;

    return (
        <div class="card bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p>Price: {price}</p>
                <p>Available: {available}</p>
                <p>Minimum Order: {minimum_order}</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;