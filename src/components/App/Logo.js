import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
    const [ hovered, setHovered ] = useState(false);
    const [ index, setIndex ] = useState(null)

    return (
        <div style={name_container}>
            <Link to='/'>
                    {
                        name.map((word, i) => {
                            return (
                                <h1
                                    key={i}
                                    style={ hovered && index === i ? letter__hover : letter }
                                    onMouseEnter={() => {setHovered(true); setIndex(i)}}
                                    onMouseLeave={() => setHovered(false)}
                                >
                                    {word}
                                </h1>
                            )
                        })
                    }
                    <div style={small} > - OUTDOOR LIVING SPACE -</div>
            </Link>
        </div>
    );
}; export default Logo

const name = ['A', 'R', 'T', 'I', 'H', 'A', 'U', 'S']

const name_container = {
    paddingTop: '20px',
    paddingLeft: '30px',
}
const letter = {
    display: 'inline-block',
    letterSpacing: '5px',
    fontSize: '50px',
    color: '#3e2008',
    transition: 'transform 0.3s ease',
}
const letter__hover = {
    ...letter,
    transform: 'scale(1.2)',
}
const small = {
    display: 'block',
    fontSize: '20px',
    color: '#3e2008',
}
