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


const Link = ({ to, text, color, backgroundColor = 'none', onClick, className, icon, external = false, showActive=true, button=true, ...props }) => {

    return (
        to && external ?
            <div className={className}>
                <a
                    href={to}
                    {...props}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={({ isActive }) => `${isActive && showActive ? 'linkActive' : 'link'} ${button ? 'button' : ''}` }
                    style={{ backgroundColor: getColor[backgroundColor] }}
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
            </div>
            :
            to && !external ?
                <div className={className}>
                    <NavLink
                        to={to}
                        {...props}
                        className={({ isActive }) => `${isActive && showActive ? 'linkActive' : 'link'} ${button ? 'button' : ''}` }
                        style={{ backgroundColor: getColor[backgroundColor] }}
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
                </div>
                :
                <div className={className}>
                    <button
                    className={({ isActive }) => `${isActive && showActive ? 'linkActive' : 'link'} ${button ? 'button' : ''}` }
                        onClick={onClick}
                        style={{ backgroundColor: getColor[backgroundColor] }}>
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
                </div>
    );
};

export default Link;
