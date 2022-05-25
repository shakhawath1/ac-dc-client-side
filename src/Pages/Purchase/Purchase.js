import React from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const { id } = useParams();
    console.log(id)


    return (
        <div>
            <h2 className='text-2xl text-center font-bold text-slate-700 my-9'>Purchase: {id}</h2>
        </div>
    );
};

export default Purchase;