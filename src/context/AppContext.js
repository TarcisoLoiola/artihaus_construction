import React, { createContext, useState, useContext, useEffect } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {

  const cards = [
    { id: 1, title: 'Patios & Walkways', description: 'Create stunning paths that connect and enhance your space.' },
    { id: 2, title: 'Driveways', description: 'Beautiful landscapes designed for comfort and sustainability.' },
    { id: 3, title: 'Retaining Walls', description: 'Durable, beautiful solutions for structure and style.' },
    { id: 4, title: 'WaterLine, Copping, & Pool Decks', description: 'Beautiful landscapes designed for comfort and sustainability.' },
    { id: 5, title: 'Firepits & Fireplaces', description: 'Beautiful landscapes designed for comfort and sustainability.' },
    // { id: 6, title: 'Landscape Design', description: 'Beautiful landscapes designed for comfort and sustainability.' },
    // Add as many cards as needed
  ];

  const [ isLoading, setIsLoading ] = useState(false);
  const [ useHeader, setUseHeader ] = useState(true);
  const [ serviceCards, setServiceCards ] = useState([])

  useEffect(() => {
    setServiceCards(cards)
  }, [])

  const toggleHeader = () => {
    setUseHeader( (prev) => !prev )
  }



  return (
    <AppContext.Provider value={{ useHeader, setUseHeader, toggleHeader, serviceCards }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
