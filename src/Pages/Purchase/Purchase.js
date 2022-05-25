import React from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const { id } = useParams();
    console.log(id)


    return (
        <div>
            <h2 className='text-2xl text-center font-bold text-slate-700 my-9'>Purchase: {id}</h2>
            <div class="card card-compact w-96 bg-base-100 shadow-xl lg:mx-20">
                <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;