import React, { useEffect, useState } from 'react';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://sheltered-cliffs-05732.herokuapp.com/review/')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setReviews(data)
            })
    }, [])


    return (
        <div>
            <h3 className='text-2xl text-center font-bold text-rose-800'>Customer Reviews</h3>
            <div>
                {
                    reviews.map(review => <div class="card w-96 bg-base-100 shadow-xl image-full" key={review._id}>
                        <div class="card-body">
                            <p>{review.review}</p>
                            <p>{review.ratings}</p>
                            <p>{review.name}</p>

                        </div>
                    </div>
                    )
                }
            </div>
        </div>
    );
};

export default Reviews;