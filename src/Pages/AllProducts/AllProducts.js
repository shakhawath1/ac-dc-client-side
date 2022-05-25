import React from 'react';
import useProducts from '../../hooks/useProducts';
import Product from './Product';

const AllProducts = () => {
    const [products] = useProducts();
    return (
        <div>
            <h2 className='text-2xl text-center text-slate-500 my-9'>All products</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-8 m-10'>
                {
                    products.map(product => <Product key={product.id} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default AllProducts;