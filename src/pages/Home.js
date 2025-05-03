import React, { useContext, useEffect } from 'react';
import { useAppContext } from '../context/AppContext';
import { ContentContext } from "../context/ContentContext";

import Certifications from '../components/Certifications';

import ImageRoleHandler from '../components/ImageRoleHandler';
import Image from '../Assets/gallery20.jpeg';

import Reviews from '../components/Reviews';
import OurCommitment from '../components/OurCommitment';
import WhoWeAre from '../components/WhoWeAre';
import OurServices from '../components/OurServices';


const Home = () => {
  const { data, loading, error } = useContext(ContentContext);

  useEffect(() => {
    window.scrollTo(0, 0); // Reset scroll position to the top
  }, []);

  return (
    <main className='home'>
      <section className='carousel-container'>
        <ImageRoleHandler src={Image} alt='carousel image' role='home--carousel' />
      </section>
      <WhoWeAre />
      <OurServices />
      <OurCommitment />
      <Certifications />
      <Reviews />
    </main>
  );
}; export default Home;