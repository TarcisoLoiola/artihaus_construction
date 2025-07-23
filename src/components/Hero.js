import { useEffect, useState } from "react";
import FadeCarousel from "./FadeCarousel";
import HeroPlayer from "./HeroPlayer";

const Hero = ({ images }) => {
    return (
        <section className='hero-container'>
            <HeroPlayer />
        </section>
    )
};
export default Hero;