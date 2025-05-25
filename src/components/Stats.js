import React from 'react'

const Stats = ({ stats = [] }) => {
    if (stats.length < 1) {
        stats = [
            { value: '25k', label: 'Successful Projects' },
            { value: '20', label: 'Years of Experience' },
            { value: '200', label: 'Client Reviews' },
            { value: '20', label: '????' },
        ];
    }

    return (
        stats.map((stat, index) => (
            <div className="stat" key={index}>
                <h1 className='h1 marginBottom-md'>{stat.value}</h1>
                <p className='p color-gray'>{stat.label}</p>
            </div>
        ))
    )
};
export default Stats