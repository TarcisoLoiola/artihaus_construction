const HeroPlayer = () => {
    return (
        <div className="hero-video-container">
            <video
                src="https://res.cloudinary.com/dqtstyldx/video/upload/v1753112618/DF403D1A-D574-4347-A48C-D1061013523C_lbpmvo.mov"
                // src="https://res.cloudinary.com/dqtstyldx/video/upload/c_crop,h_450/v1690000000/IMG_7857_jt4kcq.mp4"
                autoPlay
                muted
                loop
                playsInline
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
        </div>
    );
};

export default HeroPlayer;
