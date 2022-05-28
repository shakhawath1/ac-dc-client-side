import React from 'react';
import useProducts from '../../hooks/useProducts';

const ManageProducts = () => {
    const [products, setProducts] = useProducts();

    // delete product
    const deleteProduct = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://sheltered-cliffs-05732.herokuapp.com/product/${id}`;
            fetch(url, {
                method: 'DELETE',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = products.filter(order => order._id !== id);
                    setProducts(remaining);
                });
        };

    };
    return (

        <div>
            <h3 className='text-3xl text-center mb-6'>Manage Products</h3>
            <div className="overflow-x-auto mx-3">
                <table className="table table-compact w-full">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th className=''>Name</th>
                            <th className='text-center'>Image</th>
                            <th className='text-center'>Id</th>
                            <th className='text-center'>Delete Product</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, index) => <tr key={product._id}>
                                <th>{index + 1}</th>
                                <td>{product.name}</td>
                                <td className='text-center'>
                                    <div class="avatar">
                                        <div class="w-8 rounded">
                                            <img src={product.img} alt="" />
                                        </div>
                                    </div>
                                </td>
                                <td className='text-center'>{product._id}</td>
                                <td className='text-center'><button onClick={() => deleteProduct(product._id)} className="btn btn-xs btn-error btn-outline">delete</button></td>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default ManageProducts;