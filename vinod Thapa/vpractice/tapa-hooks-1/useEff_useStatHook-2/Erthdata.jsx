import { useState, useEffect } from "react";
import { ErthCard } from "./ErthCard";
import { Loadings } from "./loadings";
import '../useEff_useStatHook-2/Erthdata.css'

export const EffuseState_2 = () => {
  // 'https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=DEMO_KEY'
  // https://api.nasa.gov/EPIC/api/natural/date/2019-05-30?api_key=DEMO_KEY
  // 'https://api.nasa.gov/EPIC/api/natural/all?api_key=DEMO_KEY'
  // ubbLVakfNGt2y8SbMXQ398lL2MX61Cexpix3auGF
  // 'https://api.nasa.gov/EPIC/api/enhanced/all?api_key=ubbLVakfNGt2y8SbMXQ398lL2MX61Cexpix3auGF'
  const API = 'https://epic.gsfc.nasa.gov/api/enhanced/date/2015-10-31'

  const [userData, setUserData] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchingData = async () => {
    try {
      const response = await fetch(API)
      const data = await response.json()
      setTimeout(() => {
        setLoading(false) // 3 seconds baad loading false kar degga
      }, 6000)
      const first60 = data.slice(0, 20);
      setUserData(first60)
    } catch (error) {
      console.log('the error > ' + error)
    }
  }

  useEffect(() => {
    fetchingData()
  }, [])

  if(loading) return <Loadings/>

  return (<>
    <h1> my NASA data </h1>
    <div className="container mt-4">
      <div className="row">
        {/* <!-- Repeatable Card Component --> <!-- Card 1 --> */}
        {userData.map((curData) => (
          <ErthCard key={curData.identifier} curData={curData}></ErthCard>
        ))}


      </div>
    </div>

  </>);
};
