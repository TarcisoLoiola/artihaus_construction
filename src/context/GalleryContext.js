// GalleryContext.js
import React, { createContext, useState, useEffect } from 'react';

import images from '../Assets/images.json';
import videos from '../Assets/videos.json'

import gallery01 from '../Assets/gallery01.jpeg';
import gallery02 from '../Assets/gallery02.jpeg';
import gallery03 from '../Assets/gallery03.jpeg';
import gallery04 from '../Assets/gallery04.jpeg';
import gallery05 from '../Assets/gallery05.jpeg';
import gallery06 from '../Assets/gallery06.jpeg';
import gallery07 from '../Assets/gallery07.jpeg';
import gallery08 from '../Assets/gallery08.jpeg';
import gallery09 from '../Assets/gallery09.jpeg';
import gallery10 from '../Assets/gallery10.jpeg';
import gallery11 from '../Assets/gallery11.jpeg';
import gallery12 from '../Assets/gallery12.jpeg';
import gallery13 from '../Assets/gallery13.jpeg';
import gallery14 from '../Assets/gallery14.jpeg';
import gallery15 from '../Assets/gallery15.jpeg';
import gallery16 from '../Assets/gallery16.jpeg';
import gallery17 from '../Assets/gallery17.jpeg';
import gallery18 from '../Assets/gallery18.jpeg';
import gallery19 from '../Assets/gallery19.jpeg';
import gallery20 from '../Assets/gallery20.jpeg';
import gallery21 from '../Assets/gallery21.jpeg';
import gallery22 from '../Assets/gallery22.jpeg';
import gallery23 from '../Assets/gallery23.jpeg';
import gallery24 from '../Assets/gallery24.jpeg';
import gallery25 from '../Assets/gallery25.jpeg';
import gallery26 from '../Assets/gallery26.jpeg';
import gallery27 from '../Assets/gallery27.jpeg';
import gallery28 from '../Assets/gallery28.jpeg';
import gallery29 from '../Assets/gallery29.jpeg';
import gallery30 from '../Assets/gallery30.jpeg';
import gallery31 from '../Assets/gallery31.jpeg';
import gallery32 from '../Assets/gallery32.jpeg';
import gallery33 from '../Assets/gallery33.jpeg';
import gallery34 from '../Assets/gallery34.jpeg';
import gallery35 from '../Assets/gallery35.jpeg';
import gallery36 from '../Assets/gallery36.jpeg';
import gallery37 from '../Assets/gallery37.jpeg';
import gallery38 from '../Assets/gallery38.jpeg';
import gallery39 from '../Assets/gallery39.jpeg';
import gallery40 from '../Assets/gallery40.jpeg';
import gallery41 from '../Assets/gallery41.jpeg';
import gallery42 from '../Assets/gallery42.jpeg';

import media03 from '../Assets/media03.mp4';
import media05 from '../Assets/media05.mp4';
import media07 from '../Assets/media07.mp4';

import icons from '../Assets/icons.json'

export const GalleryContext = createContext();

export const GalleryProvider = ({ children }) => {
    const imageURLMap = {
        "../../Assets/gallery01.jpeg": gallery01,
        "../../Assets/gallery02.jpeg": gallery02,
        "../../Assets/gallery03.jpeg": gallery03,
        "../../Assets/gallery04.jpeg": gallery04,
        "../../Assets/gallery05.jpeg": gallery05,
        "../../Assets/gallery06.jpeg": gallery06,
        "../../Assets/gallery07.jpeg": gallery07,
        "../../Assets/gallery08.jpeg": gallery08,
        "../../Assets/gallery09.jpeg": gallery09,
        '../../Assets/gallery10.jpeg': gallery10,
        '../../Assets/gallery11.jpeg': gallery11,
        '../../Assets/gallery12.jpeg': gallery12,
        '../../Assets/gallery13.jpeg': gallery13,
        '../../Assets/gallery14.jpeg': gallery14,
        '../../Assets/gallery15.jpeg': gallery15,
        '../../Assets/gallery16.jpeg': gallery16,
        '../../Assets/gallery17.jpeg': gallery17,
        '../../Assets/gallery18.jpeg': gallery18,
        '../../Assets/gallery19.jpeg': gallery19,
        '../../Assets/gallery20.jpeg': gallery20,
        '../../Assets/gallery21.jpeg': gallery21,
        '../../Assets/gallery22.jpeg': gallery22,
        '../../Assets/gallery23.jpeg': gallery23,
        '../../Assets/gallery24.jpeg': gallery24,
        '../../Assets/gallery25.jpeg': gallery25,
        '../../Assets/gallery26.jpeg': gallery26,
        '../../Assets/gallery27.jpeg': gallery27,
        '../../Assets/gallery28.jpeg': gallery28,
        '../../Assets/gallery29.jpeg': gallery29,
        '../../Assets/gallery30.jpeg': gallery30,
        '../../Assets/gallery31.jpeg': gallery31,
        '../../Assets/gallery32.jpeg': gallery32,
        '../../Assets/gallery33.jpeg': gallery33,
        '../../Assets/gallery34.jpeg': gallery34,
        '../../Assets/gallery35.jpeg': gallery35,
        '../../Assets/gallery36.jpeg': gallery36,
        '../../Assets/gallery37.jpeg': gallery37,
        '../../Assets/gallery38.jpeg': gallery38,
        '../../Assets/gallery39.jpeg': gallery39,
        '../../Assets/gallery40.jpeg': gallery40,
        '../../Assets/gallery41.jpeg': gallery41,
        '../../Assets/gallery42.jpeg': gallery42,
    };
    const videoURLMap = {
        '../Assets/media03.mp4': media03,
        '../Assets/media05.mp4': media05,
        '../Assets/media07.mp4': media07,
    }

    const [selectedImages, setSelectedImages,] = useState([]);

    const [imageMap, setImageMap] = useState([])
    const [videoMap, setVideoMap] = useState([])

    const [selectedIcons, setSelectedIcons,] = useState([]);

    useEffect(() => {
        //const filteredImages = images.filter(image => image.category === 'Pavers'); // Example filter
        setSelectedImages(images);
        setImageMap(imageURLMap);
        setVideoMap(videoURLMap);
    }, []);


    return (
        <GalleryContext.Provider value={{ selectedImages, imageMap, videoMap, selectedIcons }}>
            {children}
        </GalleryContext.Provider>
    );
};
