import React from 'react';
import { Link } from 'react-router-dom';
import Artihaus from '../Assets/Artihaus.svg';
import Artihaus2 from '../Assets/Artihaus2.svg';
import primaryLogoIcon from '../Assets/primaryLogoIcon.svg';
import secondaryLogoIcon from '../Assets/secondaryLogoIcon.svg';

const logos = {
  artihaus: { logo: Artihaus, className: 'ArtihausLogo', alt: 'Artihaus Primary Logo' },
  artihaus2: { logo: Artihaus2, className: 'secondaryLogo', alt: 'Artihaus secondary Logo' },
  primaryLogoIcon: { logo: primaryLogoIcon, className: 'secondaryLogo', alt: 'Artihaus secondary Logo Blue' },
  secondaryLogoIcon: { logo: secondaryLogoIcon, className: 'secondaryLogo', alt: 'Artihaus secondary Logo Blue' },
};

const Logo = ({ logo = 'bellado', className = '', link = '/', alt }) => {
  const selectedLogo = logos[logo] || logos['primaryLogo'];

  return (
    <Link to={link} className={`${selectedLogo.className} ${className}`}>
      <img src={selectedLogo.logo} alt={selectedLogo.alt} />
    </Link>
  );
};

export default Logo;
