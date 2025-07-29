import ImageHandler from "./ImageHandler";
const Hero = ({ value }) => {
    const { url } = value.pages.home.hero.image
    function isVideoUrl(url) {
        return /\.(mp4|webm|ogg|mov|avi|mkv|flv)$/i.test(url);
    }
    return (
        <section className='hero-container'>
            <div className="hero-video-container">
                {
                    url &&
                        isVideoUrl(url) ?
                        <video
                            src={url}
                            // src="https://res.cloudinary.com/dqtstyldx/video/upload/c_crop,h_450/v1690000000/IMG_7857_jt4kcq.mp4"
                            autoPlay
                            muted
                            loop
                            playsInline
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                        :
                        <ImageHandler src={url} />
                }
            </div>
        </section>
    )
};
export default Hero;