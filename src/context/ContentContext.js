import { createContext, useEffect, useState } from "react";
export const ContentContext = createContext();
export const ContentProvider = ({ children, value }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  return (
    <ContentContext.Provider value={{ value, loading, error }}>
      {children}
    </ContentContext.Provider>
  );
};

