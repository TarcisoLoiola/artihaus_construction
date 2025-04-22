
import React, { useState, useContext } from 'react'
import { ContentContext } from "../context/ContentContext"

import PersonilizeIcon from '../Assets/PersonilizeIcon'
import MaterialsIcon from '../Assets/MaterialsIcon'
import BudgetIcon from '../Assets/BudgetIcon'
import ClockIcon from '../Assets/ClockIcon'

const ServiceCard = ({ cards = [], className }) => {
    const { data, loading, error } = useContext(ContentContext);
    if (cards.length < 1) {
        cards = [
            { icon: PersonilizeIcon, title: 'Personilize Service', subtitle: 'We invest time to understand your needs and provide customized solutions.' },
            { icon: MaterialsIcon, title: 'High-Quality Material', subtitle: 'Durability and impeccable finishing are our standards.' },
            { icon: BudgetIcon, title: 'Transparent Budgeting', subtitle: 'No surprises at the end of your project.' },
            { icon: ClockIcon, title: 'On-Time Delivery', subtitle: 'We respect deadlines and ensure efficient execution.'}
        ];
    }

    return (
        <div className={ className }>
            <div className='cards-container'>
                {cards.map((card, i) => (
                    <div className='card' key={i}>
                        <card.icon className='---card-icon' src={card.icon} alt='our commitment card icon'/>
                        <h4>{card.title}</h4>
                        <p>{card.subtitle}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default ServiceCard