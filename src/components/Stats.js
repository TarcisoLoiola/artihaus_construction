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
                <h1 className='u-h1 u-mr-bt-md'>{stat.value}</h1>
                <p className='u-p'>{stat.label}</p>
            </div>
        ))
    )
};
export default Stats