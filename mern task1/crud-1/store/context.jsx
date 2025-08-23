import { createContext, useContext, useState } from "react";

export const Store = createContext();

export const UpdationStore = ({ children }) => {
  const [updation, setUpdation] = useState([])
  const [searchUser, setserch] = useState({
    id:0,
    name:''
  })


  return (
    <Store.Provider value={{ updation, setUpdation, setserch, searchUser }}>
      {children}
    </Store.Provider>
  )
}

export const GloablHook = () => {
  return useContext(Store);
}