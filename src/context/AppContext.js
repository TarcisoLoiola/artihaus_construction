import React, { createContext, useState, useContext, useEffect } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [navLinkClicked, setNavLinkClicked] = useState(false);

  useEffect(() => {
    setNavLinkClicked(true)
  }, []);

  return (
    <AppContext.Provider value={navLinkClicked}>
      {children}
    </AppContext.Provider>
  );
};
export const useAppContext = () => useContext(AppContext);
