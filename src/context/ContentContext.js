import { createContext, useContext, useEffect, useState } from "react";
import API from '../api/index'

export const ContentContext = createContext();

export const ContentProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    if (!data) {
      API.Content.read({})
        .then(data => { if (isMounted) setData(data.data) })
        .catch(err => { if (isMounted) setError(err) })
        .finally(() => { if (isMounted) setLoading(false) });
      }
      return () => { isMounted = false; };
  }, [data]);

  // const fetchContent = async () => {
  //   const response = await fetch("/api/content/read"); // Fetch all page content at once
  //   const data = await response.json();
  //   setContent(data);
  // };

  // fetchContent();

  return (
    <ContentContext.Provider value={{ data, loading, error }}>
      {children}
    </ContentContext.Provider>
  );
};

