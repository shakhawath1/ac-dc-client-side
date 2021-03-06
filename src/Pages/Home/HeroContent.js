import React from 'react';
import { useNavigate } from 'react-router-dom';
import hero from '../../images/hero.jpg'

const HeroContent = () => {
    const navigate = useNavigate();

    return (
        <div className='my-8'>
            <h1 className='text-5xl text-center text-teal-500 font-bold'>AC||DC Electronics</h1>
            <div className="hero bg-base-200 my-6">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={hero} className="lg:max-w-md rounded-lg shadow-2xl w-80 md:w-96 lg:w-full" alt='' />
                    <div className='mx-6'>
                        <h1 className="text-4xl font-bold">The Best Electronics Components Here...</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button onClick={() => navigate('/login')} className="btn">Join with us</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroContent;