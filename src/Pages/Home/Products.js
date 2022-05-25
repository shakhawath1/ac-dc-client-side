import React from 'react';
import useProducts from '../../hooks/useProducts';
import Product from '../AllProducts/Product';

const Products = () => {
    const [products] = useProducts();
    const homeProducts = products.slice(0, 6);


    return (
        <div>
            <h3 className='text-2xl text-center font-bold text-rose-800'>Our Products</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-8 m-10'>
                {
                    homeProducts.map(product => <Product key={product.id} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;