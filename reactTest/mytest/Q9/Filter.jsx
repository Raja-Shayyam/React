import React, { useState, useRef } from "react";
import { GlobalHook } from "./store";

export const Filter = () => {
  const { userData, setUserData } = GlobalHook();
  const [query, setQuery] = useState("");
  const originalData = useRef(userData);

  React.useEffect(() => {
    originalData.current = userData;
  }, []);

  const handleChange = (e) => {
  const value = e.target.value.toLowerCase();
  console.log(value);
  
  setQuery(value);

  if (!value) {
    console.log(originalData.current);
    
    setUserData(originalData.current);
    return;
  }

  const filtered = originalData.current.filter(item =>
    item.name.toLowerCase().includes(value) 
  );
  setUserData(filtered);
};

  return (
    <div>
      <label htmlFor="input">Filter out recipes: </label>
      <input
        id="input"
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Type name of item ...."
      />
    </div>
  );
};