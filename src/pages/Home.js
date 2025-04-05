import React, { useContext, useEffect } from 'react';
import { useAppContext } from '../context/AppContext';
import { ContentContext } from "../context/ContentContext"

import Header from '../components/Header';
import ServiceCard from '../components/ServiceCard'
import PageBackground from '../components/PageBackground';
import Carousel from '../components/Carousel'

const Home = () => {
  const { data, loading, error } = useContext(ContentContext);

  useEffect(() => {
    window.scrollTo(0, 0); // Reset scroll position to the top
  }, []);


  return (
    <main>
      <section className='carousel-container'>
      </section>
      <section className='who-we-are-container'>
      </section>
      <section className='our-services-container'>
      </section>
      <section className='our-commitment-container'>
      </section>
      <section className='certifications-container'>
      </section>
    </main>
  );
}; export default Home;