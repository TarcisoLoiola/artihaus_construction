import HeroPlayer from "./HeroPlayer";

const Hero = ({ heroImageURL }) => {
    return (
        <section className='hero-container'>
            <div className="hero-video-container">
                <video
                    src={heroImageURL}
                    // src="https://res.cloudinary.com/dqtstyldx/video/upload/c_crop,h_450/v1690000000/IMG_7857_jt4kcq.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
            </div>
        </section>
    )
};
export default Hero;