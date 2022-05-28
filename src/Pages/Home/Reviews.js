import React, { useEffect, useState } from 'react';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://sheltered-cliffs-05732.herokuapp.com/review/')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setReviews(data.slice(0, 6))
            })
    }, [])


    return (
        <div>
            <h3 className='text-2xl text-center font-bold text-rose-800'>Customer Reviews</h3>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 m-10 justify-items-center'>
                {
                    reviews.map(review => <div className="card w-96 bg-base-100 shadow-xl image-full" key={review._id}>
                        <div className="card-body">
                            <p>Review: {review.review}</p>
                            <p>Ratings: {review.ratings}</p>
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