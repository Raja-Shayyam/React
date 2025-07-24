import { useState } from "react";

export const Biodata = () => {
  let bioData = ['wq', '31', '9', 2, 12, 'd'];
  const [initial_val, setTo_iv] = useState(bioData);

  const seting = () => {
    // setTo_iv("You clicked the button! 🚀");
    setTo_iv([90])
    // bioData=[]
  };

  return (
    <>
      <h2>{initial_val}</h2>

      {initial_val.map((item, index) => (
        <h3 key={index}>{item} — and it’s my name</h3>
      ))}

      <button onClick={seting}>Click</button>
    </>
  );
};
