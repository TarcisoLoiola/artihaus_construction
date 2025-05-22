import { NavLink, useLocation } from 'react-router-dom';
import Arrow from '../Assets/ArrowIcon'
import Dropdown from '../Assets/DropdownIcon'
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
const getSize = {
    small: '8rem',
    median: '12rem',
    large: '15rem',
    xlarge: '100%',
}
const getIcon = (icon, color) => {
    if (icon === 'arrow') {
        return <Arrow alt='button arrow' color={getColor[color]} />
    }
    else if (icon === 'dropdown') {
        return <Dropdown alt='dropdown icon' color={getColor[color]} />
    }
    else if (icon === 'facebook') {
        return <Facebook alt='facebook icon' color={getColor[color]} />
    }
    else if (icon === 'instagram') {
        return <Instagram alt='instagram icon' color={getColor[color]} />
    }
    return <span />
}


const Link = ({ to, text, color, backgroundColor = 'none', border = 'none', size = 'small', onClick, className, icon, external = false, showActive = true, button = true, ...props }) => {

    return (
        to && external ?
            <div className={className}>
                <a
                    href={to}
                    {...props}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={({ isActive }) => `${isActive && showActive ? 'linkActive' : 'link'} ${button ? 'button' : ''}`}
                    style={{ backgroundColor: getColor[backgroundColor] }}
                >
                    {text &&
                        <div style={{ color: getColor[color] }}>
                            {text}
                        </div>}
                    {
                        getIcon(icon, color)
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
                            getIcon(icon, color)
                        }
                    </NavLink>
                </div>
                :
                <div className={className}
                    style={{
                        backgroundColor: getColor[backgroundColor],
                        border: `1px solid ${getColor[border]}`,
                        borderRadius: '.5rem'
                    }}
                >
                    <button
                        to={to}
                        {...props}
                        className={button ? 'button' : ''}
                        onClick={onClick}
                    >
                        {text &&
                            <div style={{ color: getColor[color] }}>
                                {text}
                            </div>
                        }
                        {
                            getIcon(icon, color)
                        }
                    </button>
                </div>
    );
};

export default Link;
