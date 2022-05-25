import React from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import Product from '../AllProducts/Product';

const Products = () => {
    const [products] = useProducts();
    const homeProducts = products.slice(0, 6);


    return (
        <div className='my-10'>
            <h3 className='text-3xl text-center font-bold text-rose-800'>Our Products</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-8 m-8'>
                {
                    homeProducts.map(product => <Product key={product._id} product={product}></Product>)
                }
            </div>
            <div className='flex justify-center'>
                <Link to="/all-products" className='btn'>view all products</Link>
            </div>
        </div>
    );
};

export default Products;