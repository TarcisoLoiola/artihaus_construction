import React from 'react';
import '../style/HomeComponent.css';

const cards = [
  { id: 1, title: 'Patios & Walkways', description: 'Create stunning paths that connect and enhance your space.' },
  { id: 2, title: 'Driveways', description: 'Beautiful landscapes designed for comfort and sustainability.' },
  { id: 3, title: 'Retaining Walls', description: 'Durable, beautiful solutions for structure and style.' },
  { id: 4, title: 'WaterLine, Copping, & Pool Decks', description: 'Beautiful landscapes designed for comfort and sustainability.' },
  { id: 5, title: 'Firepits & Fireplaces', description: 'Beautiful landscapes designed for comfort and sustainability.' },
  // { id: 6, title: 'Landscape Design', description: 'Beautiful landscapes designed for comfort and sustainability.' },
  // Add as many cards as needed
];

const Homepage = () => {

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <div className="overlay">
        <h2>Transform Your Outdoors with Artihaus Construction</h2>
          <p>At Artihaus Construction, we bring your vision to life with custom hardscapes that blend elegance,
          durability, and creativity. From patios and walkways to unique landscaping features,
          our expert team transforms your outdoor space into a beautiful and functional
          extension of your home.
          </p>
          <button className="hero-button">Get Started</button>
        </div>
      </section>

      {/* Featured Services */}
      <section className="services">
            <h2>Our Services</h2>
            <div className="service-cards" >
                {[...cards].map((card, index) => (
                    <div className="card" key={index}>
                        <h3>{card.title}</h3>
                        <p>{card.description}</p>
                    </div>
                ))}
            </div>
        </section>Í
    </div>
  );
};

export default Homepage;
