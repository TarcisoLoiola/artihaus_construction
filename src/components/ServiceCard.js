
import React, { useState, useContext } from 'react'
import { ContentContext } from "../context/ContentContext"


const ServiceCard = ({ cards }) => {
    const { data, loading, error } = useContext(ContentContext);
    const [hovered, setHovered] = useState(false)
    const [index, setIndex] = useState(null)
    console.log(data)
    return (
        data?.pages?.service &&
        <section className='cards-container' >
            <h2>{data?.pages?.service?.title}</h2>
            <h4>{data?.pages?.service?.subtitle || "Loading..."}</h4>
            <div className='cards'>
                {data?.pages?.service?.cards && [...data?.pages?.service?.cards].map((card, i) => (
                    <div className='card' key={i}
                        onMouseEnter={() => {
                            setTimeout(() => {
                                setIndex(i)
                            }, 200);
                        }}
                        onMouseLeave={() => {
                            setTimeout(() => {
                            }, 200);
                        }}
                    >
                        <h3 style={card_h3}>{card.title}</h3>
                        <p>{card.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
export default ServiceCard

/* Services Section */

const services_h2 = {
    marginBottom: '20px',
    color: '#fff',
}

const service_cards = {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    /* overflow-x: 'auto', Enables horizontal scroll */
    gap: '20px',
    /* scroll-snap-type: 'x mandatory',
    max-width: 'calc(250px * 3 + 40px * 2)', Allows exactly 3 cards to show at a time */
    margin: 'auto', /* Centers the scroll area on the page */
}

const service_card = {
    flex: '0 0 auto',
    backgroundColor: 'rgb(255 255 255)',
    color: '#3e2008',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    width: 'auto',
    textAlign: 'center',
    /* scroll-snapAlign: 'center', */
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
}

const card_h3 = {
    fontSize: '1.2rem',
    marginBottom: '10px',
}

/* Hover effect for interaction */
const service_card__hover = {
    ...service_card,
    transform: 'scale(1.1)',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
    cursor: 'pointer',
}