import { useState,useEffect } from "react";
import { Card } from "./card";
import { Loading } from "./loading";
import "./eff.css";

export const EffuseState = () => {

  const[userData , setUserData] = useState([])
  const[loading, setLoading] = useState(true)
  const[btn,setBtn]=useState(false)
  const useEffectApi= async()=>{
    try {
      console.log('salam')
    const response = await fetch('https://api.slingacademy.com/v1/sample-data/photos?offset=1&limit=20');
    const data = await response.json()
    // setLoading(false)
    setTimeout(() => {
      setLoading(false) // 3 seconds baad loading false kar do
    }, 5000)
    console.log(data)
    const PhotoData = data.photos;
    setUserData(PhotoData)
    } catch (error) {
      console.log('error is >> '+ error)
    }
    
  }
  useEffect(()=>{
  // setInterval(() => {
    
    useEffectApi()
  
  },[])

  if(loading) return <Loading></Loading>
  // return loading && <Loading></Loading>
const seting=(i)=>{
  setBtn(i)
}

  return (
    <div>
      <h1>this is use eff and state with useWffectApi{btn&&'after btn state changed'}</h1>
      <button onClick={()=>{seting(true)}}>..... my btn ....</button>
      <div className="container">
        <div className="row">
         {userData.map((cData) => (
            <div key={cData.id}>
              <Card cData={cData} />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};


// import { useState, useEffect } from "react";
// import { Card } from "./card";
// import "./eff.css";

// export const EffuseState = () => {
//   const [userData, setUserData] = useState([]);

//   const fetchData = async () => {
//     try {
//       const response = await fetch(
//         "https://api.slingacademy.com/v1/sample-data/photos"
//       );
//       const data = await response.json();
//       const photos = data.photos || data; // adjust if structure differs
//       setUserData(photos);
//     } catch (err) {
//       console.error("Failed to fetch photos:", err);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1>Use Effect + State with SlingAcademy API</h1>
//       <div className="container">
//         <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
//           {userData.map((cData) => (
//             <div className="col" key={cData.id}>
//               <Card cData={cData} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };
