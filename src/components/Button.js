import { Link } from 'react-router-dom';
import Arrow from '../Assets/ArrowIcon'
// import classNames from 'classnames';

const Button = ({ text, to, role, color, onClick, className, icon = false, external = false, ...props }) => {
console.log( text, to, role, color, icon, external)
    return (
        to && external ?
            <a href={to} className={className} target="_blank" rel="noopener noreferrer" {...props}>
                <div className='button-text'>{text}</div>
                {icon && <Arrow className='button-icon' alt='button arrow' />}
            </a>
            :
            to && !external ?
                <Link to={to} className={className} {...props}>
                    <div className='button-text'>{text}</div>
                    {icon && <Arrow className='button-icon' alt='button arrow' />}
                </Link>
                :
                <button onClick={onClick} className={className} {...props}>
                    <div className='button-text'>{text}</div>
                    {icon && <Arrow className='button-icon' alt='button arrow' />}
                </button>
    );
};

export default Button;
