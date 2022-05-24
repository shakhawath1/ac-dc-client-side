import React from 'react';

const Banner = () => {
    return (
        <div class="card lg:card-side bg-base-100 shadow-xl mx-20 my-10">
            <figure><img src="https://api.lorem.space/image/album?w=400&h=400" alt="Album" /></figure>
            <div class="card-body">
                <h2 class="card-title">New album is released!</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
                <div class="card-actions justify-start">
                    <button class="btn btn-accent">Join with us</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;