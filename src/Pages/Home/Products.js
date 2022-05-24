import React from 'react';
import useProducts from '../../hooks/useProducts';

const Products = () => {
    const [products] = useProducts();
    const homeProducts = products.slice(0, 6);


    return (
        <div>
            <h3 className='text-2xl text-center font-bold text-rose-800'>Our Products</h3>
            <div>
                {
                    homeProducts.map(product =>
                        <div>
                            <h5>{product.name}</h5>
                        </div>

                    )
                }
            </div>
        </div>
    );
};

export default Products;