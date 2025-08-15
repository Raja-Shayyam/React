import { createContext , useState } from "react";

export const Theme = createContext();

export const ThemeProviderStore = ({children}) => {
  const [theme,seTheme] = useState("light")
  const [count , setCount] = useState(0)
  
  return (
    <Theme.Provider value={{theme,seTheme,count,setCount}}>
      {children}
    </Theme.Provider>
  )
}