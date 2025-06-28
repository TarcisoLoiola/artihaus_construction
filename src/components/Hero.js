import { useEffect, useState } from "react";
import FadeCarousel from "./FadeCarousel";


const Hero = ({ images }) => {
    return (
        <section className='hero-container'>
            <FadeCarousel images={images} interval={3000} />
        </section>
    )
};
export default Hero;