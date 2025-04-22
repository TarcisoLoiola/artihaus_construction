import { NavLink, useLocation } from 'react-router-dom';
import Arrow from '../Assets/ArrowIcon'
import Facebook from '../Assets/FacebookIcon'
import Instagram from '../Assets/InstagramIcon'

const getColor = {
    white: '#ffffff',
    gold: '#B79977',
    graylight: '#f1f1f1',
    gray: '#5E637F',
    graydark: '#374151',
    blue: '#294E99',
    error: '#e74c3c',
    success: '#2ecc71',
    warning: '#f1c40f',
}


const Link = ({ to, text, color, background = 'none', onClick, className, icon, external = false, ...props }) => {

    return (
        to && external ?
            <a
                href={to}
                {...props}
                target="_blank"
                rel="noopener noreferrer"
                className={({ isActive }) => (isActive ? 'navLinkActive' : `navLink ${className}`)}
                style={{ backgroundColor: getColor[background] }}
            >
                {text &&
                    <div style={{ color: getColor[color] }}>
                        {text}
                    </div>}
                {
                    icon === 'arrow' ? <Arrow alt='button arrow' color={getColor[color]} />
                        : icon === 'facebook' ? <Facebook alt='facebook icon' color={getColor[color]} />
                            : icon === 'instagram' ? <Instagram alt='instagram icon' color={getColor[color]} />
                                : <span />
                }
            </a>
            :
            to && !external ?
                <NavLink
                    to={to}
                    {...props}
                    className={({ isActive }) => (isActive ? 'navLinkActive' : `navLink ${className}`)}
                    style={{ backgroundColor: getColor[background] }}
                >
                    {text &&
                        <div style={{ color: getColor[color] }}>
                            {text}
                        </div>
                    }
                    {
                        icon === 'arrow' ? <Arrow alt='button arrow' color={getColor[color]} />
                            : icon === 'facebook' ? <Facebook alt='facebook icon' color={getColor[color]} />
                                : icon === 'instagram' ? <Instagram alt='instagram icon' color={getColor[color]} />
                                    : <span />
                    }
                </NavLink>
                :
                <button
                className={({ isActive }) => (isActive ? 'navLinkActive' : `navLink ${className}`)}
                onClick={onClick}
                style={{ backgroundColor: getColor[background] }}>
                    {text &&
                        <div
                            style={{ color: getColor[color] }}
                        >
                            {text}
                        </div>}
                    {
                        icon === 'arrow' ? <Arrow alt='button arrow' color={getColor[color]} />
                            : icon === 'facebook' ? <Facebook alt='facebook icon' color={getColor[color]} />
                                : icon === 'instagram' ? <Instagram alt='instagram icon' color={getColor[color]} />
                                    : <span />
                    }
                </button>
    );
};

export default Link;
