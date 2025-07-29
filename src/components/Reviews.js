
import React, { useState, useContext } from 'react'
import { ContentContext } from "../context/ContentContext"
import Carousel from './Carousel';


const Reviews = ({ className }) => {
    const { value, loading, error } = useContext(ContentContext);
    const { reviews } = value
    return (
        <section className='reviews backgroundColor-gold'>
            <div className='page-content-container'>
                <h1 className='h1 color-white text-center marginBottom-lg'>What Our Clients Say</h1>
                {/* <div className='reviews'> */}
                <div className='cards-container'>
                    <Carousel data={reviews} isImage={false} role='ourservices-carousel' itemsPerView={3} interval={4000} />
                </div>
                {/* </div> */}
            </div>
        </section>
    )
}
export default Reviews
// <div className='reviews'>
//     <div className='cards-container flex-row'>
//         {reviews.map((review, index) => (
//             <div className='card' key={index}>
//                 <div className='review-rating'><Rating rating={review.rating} /></div>
//                 <p className='p review-comment'>{review.comment}</p>
//                 <h4 className='h4 review-userName'>{review.user_name}</h4>
//                 <h4 className='h4 review-location-service'>{review.service}, {review.location}</h4>
//             </div>
//         ))}
//     </div>
// </div>