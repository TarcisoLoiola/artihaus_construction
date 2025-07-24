import React, { createContext, useState } from 'react';

export const GalleryContext = createContext();
export const GalleryProvider = ({ children, value }) => {
    const [galleryCategory, setGalleryCategory] = useState('All');
    const [fullScreenImage, setfullScreenImage] = useState();
    return (
        <GalleryContext.Provider value={{ value, galleryCategory, setGalleryCategory, fullScreenImage, setfullScreenImage }}>
            {children}
        </GalleryContext.Provider>
    );
};
