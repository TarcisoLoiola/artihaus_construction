
import React, { useState, useContext } from 'react'
import { ContentContext } from "../context/ContentContext"


const Reviews = ({ reviews = [], className }) => {
    const { data, loading, error } = useContext(ContentContext);
    if (reviews.length < 1) {
        reviews = [
            { user_name: ' John Milenie', rating: 5, service: 'paver patio', location: 'Buford', comment: '.. followed by some bogus content. Aenean commodo ligula egget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.' },
            { user_name: ' John Milenie', rating: 5, service: 'paver patio', location: 'Buford', comment: '.. followed by some bogus content. Aenean commodo ligula egget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.' },
            { user_name: ' John Milenie', rating: 5, service: 'paver patio', location: 'Buford', comment: '.. followed by some bogus content. Aenean commodo ligula egget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.' },
        ];
    }

    return (
        <section className='reviews'>
            <div className='page-content-container'>
                <h1>What Our Clients Say</h1>
                <div className='reviews'>
                    <div className='cards-container'>
                        {reviews.map((review, index) => (
                            <div className='card' key={index}>
                                <div className='review-rating'>{review.rating}</div>
                                <p className='review-comment'>{review.comment}</p>
                                <h4 className='review-userName'>{review.user_name}</h4>
                                <h4 className='review-location-service'>{review.service}, {review.location}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Reviews