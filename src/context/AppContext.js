import React, { createContext, useState, useContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [galleryCategory, setGalleryCategory] = useState('All');


  return (
    <AppContext.Provider value={{ galleryCategory, setGalleryCategory }}>
      {children}
    </AppContext.Provider>
  );
};
export const useAppContext = () => useContext(AppContext);
