import React from 'react';
import { Link } from 'react-router-dom';
import primaryLogo from '../Assets/primaryLogo.svg';
import secondaryLogo from '../Assets/secondaryLogo.svg';
import primaryLogoIcon from '../Assets/primaryLogoIcon.svg';
import secondaryLogoIcon from '../Assets/secondaryLogoIcon.svg';

const logos = {
    primaryLogo: {logo: primaryLogo, className: 'primaryLogo', alt: 'Artihaus Primary Logo'},
    secondaryLogo: {logo: secondaryLogo, className: 'secondaryLogo', alt: 'Artihaus secondary Logo'},
    primaryLogoIcon: {logo: primaryLogoIcon, className: 'secondaryLogo', alt: 'Artihaus secondary Logo Blue'},
    secondaryLogoIcon: {logo: secondaryLogoIcon, className: 'secondaryLogo', alt: 'Artihaus secondary Logo Blue'},
};

const Logo = ({ logo = 'primaryLogo', className = '', link = '/', alt}) => {
  const selectedLogo = logos[logo] || logos['primaryLogo'];

  return (
    <Link to={link} className={`${selectedLogo.className} ${className}`}>
      <img src={selectedLogo.logo} alt={selectedLogo.alt} />
    </Link>
  );
};

export default Logo;
