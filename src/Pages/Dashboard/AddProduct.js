import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';



const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();

    // add product function
    const addProduct = (data) => {
        console.log(data)
        fetch(`https://sheltered-cliffs-05732.herokuapp.com/product/`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(inserted => {
                if (inserted.insertedId) {
                    toast.success('Product added successfully.')
                    reset();
                }
                else {
                    toast.error('Failed to add the product!');
                };
            });
    };

    return (
        <div className='mx-2'>
            <h2 className='text-4xl text-lime-700 font-semibold text-center mt-8'>Add Product</h2>
            <div className="card bg-base-100 shadow-xl lg:w-2/4 md:w-3/4 mx-auto p-5 my-8">
                <h3 className='text-2xl text-slate-600 font-semibold text-center my-2'>Product Information</h3>
                <form className='d-flex flex-column form-control' onSubmit={handleSubmit(addProduct)}>
                    <label className="mb-1">Product Name</label>
                    <input className="input input-bordered w-full mb-3" placeholder='Product Name' type='text' {...register("name", { required: true, maxLength: 20 })} required />
                    <label className="mb-1">Description</label>
                    <textarea className="input input-bordered w-full mb-3" placeholder='Description' {...register("description")} required />
                    <label className="mb-1">Unite Price</label>
                    <input className="input input-bordered w-full mb-3" type="number" placeholder='Unite Price'  {...register("price")} required />
                    <label className="mb-1">Available Quantity</label>
                    <input className="input input-bordered w-full mb-3" type="number" placeholder='Available Quantity' {...register("available")} required />
                    <label className="mb-1">Minimum Order</label>
                    <input className="input input-bordered w-full mb-3" value='100000' type="number" {...register("minimum_order")} required />
                    <label className="mb-1">Image Url</label>
                    <input className="input input-bordered w-full mb-3" type="text" placeholder='Image Url' {...register("img")} required />

                    <input className='btn btn-accent' type="submit" value="Add" />

                </form>

            </div>
        </div>
    );
};

export default AddProduct;