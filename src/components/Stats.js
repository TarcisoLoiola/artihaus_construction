import React from 'react'

const Stats = ({ stats = [] }) => {
    if (stats.length < 1) {
        stats = [
            { value: '2.5k', label: 'Successful Projects' },
            { value: '20', label: 'Years of Experience' },
            { value: '50+', label: 'Client Reviews' },
        ];
    }

    return (
        stats.map((stat, index) => (
            <div className="stat width-md" key={index}>
                <h1 className='h1 color-blue'>{stat.value}</h1>
                <p className='p color-gray'>{stat.label}</p>
            </div>
        ))
    )
};
export default Stats