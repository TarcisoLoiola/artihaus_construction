import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Arrow from '../Assets/ArrowIcon'
import Facebook from '../Assets/FacebookIcon'
import Instagram from '../Assets/InstagramIcon'

const getColor = {
    white: '#ffffff',
    gold: '#B79977',
    lightgray: '#f1f1f1',
    gray: '#5E637F',
    darkgray: '#374151',
    blue: '#294E99',
    error: '#e74c3c',
    success: '#2ecc71',
    warning: '#f1c40f',
}

const getIcon = (icon, color, direction) => {
    if (icon === 'arrow') {
        return <Arrow alt='button arrow' color={getColor[color]} direction={direction} />
    }
    else if (icon === 'facebook') {
        return <Facebook alt='facebook icon' color={getColor[color]} />
    }
    else if (icon === 'instagram') {
        return <Instagram alt='instagram icon' color={getColor[color]} />
    }
    return <span />
}


const Link = ({ to, text, color, direction, backgroundColor = 'none', border = 'none', size = 'small', onClick, className, icon, external = false, showActive = true, button = true, ...props }) => {
    return (
        to && external ?
            <div className={className}>
                <a
                    href={to}
                    {...props}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`link ${button ? 'button' : ''}`}
                    style={{ backgroundColor: getColor[backgroundColor] }}
                >
                    {text &&
                        <div style={{ color: getColor[color] }}>
                            {text}
                        </div>}
                    {
                        getIcon(icon, color, direction)
                    }
                </a>
            </div>
            :
            to && !external ?
                <div className={className}>
                    <NavLink
                        to={to}
                        {...props}
                        className={({ isActive }) => `${isActive && showActive ? 'linkActive' : 'link'} ${button ? 'button' : ''}`}
                        style={{ backgroundColor: getColor[backgroundColor] }}
                    >
                        {text &&
                            <div style={{ color: getColor[color] }}>
                                {text}
                            </div>
                        }
                        {
                            getIcon(icon, color, direction)
                        }
                    </NavLink>
                </div>
                :
                <div className={`${className} cursor-pointer`}
                    style={{
                        backgroundColor: getColor[backgroundColor],
                        border: `1px solid ${getColor[border]}`,
                        borderRadius: '.5rem'
                    }}
                    onClick={onClick}
                >
                    <button
                        {...props}
                        className='submitButton'
                    >
                        {text &&
                            <div style={{ color: getColor[color] }}>
                                {text}
                            </div>
                        }
                        {
                            getIcon(icon, color, direction)
                        }
                    </button>
                </div>
    );
};

export default Link;
