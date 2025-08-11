import { createContext, useContext, useState, useEffect } from "react";
export const Dataprazer = createContext();

export const Store = ({ children }) => { 

  const API = 'https://dummyjson.com/recipes';

  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchingData = async () => {
    try {
      const response = await fetch(API);
      const data = await response.json();
      setUserData(data.recipes || []); 
      setTimeout(() => {
        setLoading(false); // 3 seconds later, loading is set to false
      }, 3000);
      console.log(data);
      if (data.recipes && data.recipes.length > 0) {
        console.log(data.recipes[0]);
      }
    } catch (error) {
      console.log('the error > ' + error);
    }
  };

  useEffect(() => {
    fetchingData();
  }, []);

  return (
    <Dataprazer.Provider value={{ userData , setUserData, loading }}>
      {children} 
    </Dataprazer.Provider>
  );
};

// Creating Global Hook for use
export const GlobalHook = () => { // fixed typo here
  return useContext(Dataprazer);
};