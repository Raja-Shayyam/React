import { createContext, useContext, useState } from "react";


export const ThemeContext = createContext();

export const ThemeProviderStore = ({ children }) => {
  const [delayed, setDelayed] = useState(3);
  const [show, setshow] = useState(false)

  return (
    <ThemeContext.Provider value={{ delayed, setDelayed ,show , setshow }}>
      {children}
    </ThemeContext.Provider>
  );
};


export const customhook = () => useContext(ThemeContext);