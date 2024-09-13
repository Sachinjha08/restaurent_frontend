import React from 'react';

const Reviews = () => {
    const reviewsData = [
        {
            id: 1,
            name: 'John Doe',
            rating: 5,
            comment: 'Great experience! Highly recommended.',
        },
        {
            id: 2,
            name: 'Jane Smith',
            rating: 4,
            comment: 'Good service but could improve on waiting times.',
        },
        {
            id: 3,
            name: 'Alice Johnson',
            rating: 5,
            comment: 'The best place I’ve ever visited!',
        },
    ];

    return (
        <div className="reviews-container">
            <h2>User Reviews</h2>
            <div className="reviews-grid">
                {reviewsData.map((review) => (
                    <div key={review.id} className="review-card">
                        <h3>{review.name}</h3>
                        <div className="rating">Rating: {review.rating} / 5</div>
                        <p>{review.comment}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Reviews;
