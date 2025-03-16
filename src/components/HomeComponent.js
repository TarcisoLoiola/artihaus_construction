import React, { useEffect } from 'react';
import { useAppContext } from '../context/AppContext';

import Header from './App/Header';
import ServiceCard from './App/ServiceCard'
import PageBackground from './App/PageBackground';
/*

import { useContent } from "../ContentContext";

const HomePage = () => {
  const content = useContent();

  if (!content) return <p>Loading...</p>;

  return <h1>{content.home.title}</h1>;
};
export default HomePage;

*/

const Homepage = () => {

  useEffect(() => {
    window.scrollTo(0, 0); // Reset scroll position to the top
  }, []);

  const { serviceCards } = useAppContext()

  return (
    <Header>
    <PageBackground pageType="homepage">
        <section style={hero}>
          <div style={overlay}>
            <h2 style={hero_h2}>Transform Your Outdoors with Artihaus Construction</h2>
            <p style={hero_p}>
              At Artihaus Construction, we bring your vision to life with custom
              hardscapes that blend elegance, durability, and creativity. From patios
              and walkways to unique landscaping features, our expert team
              transforms your outdoor space into a beautiful and functional
              extension of your home.
            </p>
          </div>
        </section>
        {/* Featured Services */}
        <ServiceCard cards={serviceCards} />
        </PageBackground>
      </Header>
  );
};
export default Homepage;

/* Hero Section */
const hero = {
  position: 'relative',
  height: '100vh', /* Full viewport height */
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#eeeff1',
  textAlign: 'center',
  overflow: 'hidden',
  zIndex: 1,
}

const hero_image = {
  position: 'absolute',
  top: '0',
  left: '0',
  width: '90%',
  height: '90%',
  objectFit: 'fill', /* Ensures the image covers the entire area without distortion */
  zIndex: 1, /* Places the image behind other content */
}

const overlay = {
  // backgroundColor: 'rgb(66 56 52 / 69%)', /* Dark overlay for text readability */
  backgroundColor: 'rgb(62 32 8 / 50%)',//#9db289
  padding: '50px',
  borderRadius: '8px',
  zIndex: 1, /* Places overlay above the image */
}

const hero_h2 = {
  fontSize: '2.7rem',
  lineHeight: '1.5',
  marginBottom: '10px',
}
const hero_p = {
  fontSize: '1.7rem',
  lineHeight: '1.7',

}

const hero_button = {
  marginTop: '20px',
  padding: '10px 20px',
  backgroundColor: '#333',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  transition: 'backgroundColor 0.3s',
}

const hero_button__hover = {
  backgroundColor: '#555',
}

/* Introduction Section */
const intro = {
  /* padding: '40px', */
  textAlign: 'center',
}

const intro_h2 = {
  fontSize: '2rem',
  marginBottom: '10px',
}

/* Services Section */
const services = {
  /* padding: '40px', */
  ...overlay,
  textAlign: 'center',
  overflow: 'hidden',
}

const services_h2 = {
  marginBottom: '20px',
  color: '#fff',
}

const service_cards = {
  display: 'grid',
  gridTemplateColumns: 'repeat(5, 1fr)',
  /* overflow-x: 'auto', Enables horizontal scroll */
  gap: '20px',
  /* scroll-snap-type: 'x mandatory',
  max-width: 'calc(250px * 3 + 40px * 2)', Allows exactly 3 cards to show at a time */
  margin: 'auto', /* Centers the scroll area on the page */
}

const service_card = {
  flex: '0 0 auto',
  background: 'white',
  color: '#294E99',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  width: 'auto',
  textAlign: 'center',
  /* scroll-snapAlign: 'center', */
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
}

const card_h3 = {
  fontSize: '1.2rem',
  marginBottom: '10px',
}

/* Hover effect for interaction */
const service_card__hover = {
  transform: 'scale(1.05)',
  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
  cursor: 'pointer',
}

/* Gallery Section */
const gallery = {
  textAlign: 'center',
}

const gallery_images = {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '10px',
}

const gallery_images__img = {
  width: '100%',
  borderRadius: '5px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
}
