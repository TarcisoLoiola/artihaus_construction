import React, { useContext, useEffect } from 'react';
import { useAppContext } from '../context/AppContext';
import { ContentContext } from "../context/ContentContext"

import Header from '../components/Header';
import ServiceCard from '../components/ServiceCard'
import PageBackground from '../components/PageBackground';

import ImageRoleHandler from '../components/ImageRoleHandler'
import Image from '../Assets/gallery41.jpeg'
import rec84 from '../Assets/Rectangle 84.png'

import Stats from '../components/Stats';
import Button from '../components/Button';

const Home = () => {
  const { data, loading, error } = useContext(ContentContext);

  useEffect(() => {
    window.scrollTo(0, 0); // Reset scroll position to the top
  }, []);


  return (
    <main>
      <section className='carousel-container'>
        <ImageRoleHandler src={Image} alt='carousel image' role='home--carousel' />
      </section>
      <section className='who-we-are-container'>
        <div className='who-we-are'>
          <div className='who-we-are--describe'>
            <div>
              <h1>Who we are?</h1>
              <h4>
                Transform Your Outdoors with Artihaus Construction
              </h4>
              <p>
                At Artihaus Construction, we believe that outdoor spaces should be as inviting and functional as the interiors of a home. With over 20 years of experience in hardscape and landscape construction, we specialize in transforming yards into stunning, long-lasting outdoor living spaces.
              </p>
              <p>
                From patios and retaining walls to walkways, driveways, and custom outdoor features, our craftsmanship is built to stand the test of time.
              </p>
            </div>
            <ImageRoleHandler src={rec84} alt='who we are image' role='home--whoweare' />
          </div>
          <div className='who-we-are--stats'>
            <Stats />
          </div>
          <div className='who-we-are--learnmore'>
            <Button text='Lean More' to='/about' className='button button-gold' icon />
          </div>
        </div>
      </section>
      <section className='our-services-container'>
        <div className='our-services'>
          <h1>Our Services</h1>
          <div className='our-services--carousel'>
            <ImageRoleHandler src={rec84} alt='who we are image' role='home--whoweare' />
            <ImageRoleHandler src={rec84} alt='who we are image' role='home--whoweare' />
            <ImageRoleHandler src={rec84} alt='who we are image' role='home--whoweare' />
          </div>
          <div className='our-services---learnmore'>
            <Button text='See More' to='/gallery' className='button button-white' icon />
          </div>
        </div>
      </section>
      <section className='our-commitment-container'>
      </section>
      <section className='certifications-container'>
      </section>
    </main>
  );
}; export default Home;