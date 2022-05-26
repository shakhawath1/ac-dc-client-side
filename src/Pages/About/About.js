import React from 'react';
import logo from '../../images/SBLogo.png'
import director1 from '../../images/director/director1.webp'
import director2 from '../../images/director/director2.webp'
import director3 from '../../images/director/director3.webp'

const About = () => {
    return (
        <div className='lg:mx-40 my-12'>
            <div className='text-center'>
                <h1 className='text-4xl text-emerald-600 font-bold'>ABOUT US</h1>
                <img className='mx-auto w-52 my-5' src={logo} alt="" />
                <p className='mt-8 text-xl text-slate-900 mx-10'>AC||DC is one of the old and leading electrical electronics and Electro-mechanical system based manufacturing company. Consumer satisfaction is our first responsibility. We are always beside you.
                    AC||DC Your Trusted Quality Partner.</p>
                <p className='text-xl text-slate-900 mx-10'>We have redefined the core value of stationary items and still developing trendy products innovating various augmented values. Innovative product development has enabled us to serve some MNCs as well as some reputed local and international buyers. We are already exporting our pens to Middle East, Africa and some parts of Asia and Europe.</p>
            </div>
            <div className='divider mx-40 my-10'></div>
            <div className='mx-4'>
                <h3 className='text-4xl text-center text-emerald-600 font-bold mb-10'>BOARD OF DIRECTORS</h3>
                <div className='grid grid-cols-1 lg:grid-cols-3 justify-items-center gap-8  text-center '>
                    <div class="card bg-base-100 shadow-md shadow-purple-400">
                        <figure><img src={director1} alt="man" /></figure>
                        <div class="card-body">
                            <h2 class="text-xl text-cyan-800 font-bold">Jack Crockett</h2>
                        </div>
                    </div>
                    <div class="card bg-base-100 shadow-md shadow-purple-400">
                        <figure><img src={director2} alt="man" /></figure>
                        <div class="card-body">
                            <h2 class="text-xl text-cyan-800 font-bold">Robin Blake</h2>
                        </div>
                    </div>
                    <div class="card bg-base-100 shadow-md shadow-purple-400">
                        <figure><img src={director3} alt="man" /></figure>
                        <div class="card-body">
                            <h2 class="text-xl text-cyan-800 font-bold">Drew Jordan</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;