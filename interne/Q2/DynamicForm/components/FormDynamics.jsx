import { useState,useEffect } from 'react';
import { data } from '../store/dataapi'

export const FormDynamics = () => {

  const [formConfig, setFormConfig] = useState(null);

  useEffect(() => {
    setFormConfig(data);
  }, []);

  const handleSubmit = () => {
    
  }
   
  return (<>
    <form action="" onSubmit={handleSubmit}>
      <select value={formConfig[formConfig.name] || ""} >
        <li>e</li>
        <li>f</li>
        <li>g</li>
      </select>
    </form>
  </>)
}
