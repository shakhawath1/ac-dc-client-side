import React from 'react';
import useProducts from '../../hooks/useProducts';

const AllProducts = () => {
    const [products] = useProducts();
    return (
        <div>
            <h2 className='text-2xl'>All products</h2>
            <h4>{products.length}</h4>
        </div>
    );
};

export default AllProducts;