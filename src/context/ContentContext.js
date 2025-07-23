import { createContext, useEffect, useState } from "react";
import API from '../api/index'

export const ContentContext = createContext();

export const ContentProvider = ({ children }) => {
  const [content, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    if (!content) {
      API.Content.read({ static: true })
        .then(content => {
          if (isMounted) {
            setData(content.data)
            console.log(content)
          }
        })
        .catch(err => { if (isMounted) setError(err) })
        .finally(() => { if (isMounted) setLoading(false) });
    }
    return () => { isMounted = false; };
  }, [content]);

  // const fetchContent = async () => {
  //   const response = await fetch("/api/content/read"); // Fetch all page content at once
  //   const content = await response.json();
  //   console.log(content)
  // };

  // fetchContent();

  return (
    <ContentContext.Provider value={{ content, loading, error }}>
      {children}
    </ContentContext.Provider>
  );
};

