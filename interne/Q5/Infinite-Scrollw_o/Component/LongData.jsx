import { useEffect, useState } from "react"
import { motion } from "motion/react"

const API = 'https://api.freeapi.app/api/v1/public/comnt?query=sociable&page=1&limit=30'


export const LongData = () => {
  const limit = 10

  const [Comnt, setComents] = useState([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [handle, setHandle] = useState(1)
  // const [skip, setSkip] = useState(1)

  function sceck() {
    console.log('ínner height ', window.innerHeight)
    console.log('S©róÓL ¥ ', window.scrollY);
    console.log('totall +  ', window.scrollY + window.innerHeight);
    console.log('full size >  ', document.documentElement.scrollHeight);

  }

  function handleScroll() {
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50) {
      console.log('-------------- salam ---------------', document.documentElement.scrollHeight);
      setPage(page + 1)
      setLoading(true)
    }
    else if(window.innerHeight + window.scrollY < document.documentElement.scrollHeight/3 ){
      console.log('sucess 9999999999999999996666666666666','   back')
      
    }

  }


  const fetching = async () => {

    const skip = (page - 1) * limit;
    console.log(page, skip)

    try {
      const res = await fetch(`https://dummyjson.com/comments?skip=${skip}&limit=${limit}`)
      const Data = await res.json()
      console.log(Data);
      // setComents(Data.comments)
      setComents((prev) => [...prev, ...Data.comments])
      // let t = true;
      setHandle(true)
      if (handle) {
        window.addEventListener("scroll", handleScroll);
        return false
      }

      setLoading(false)
    } catch (error) {
      console.log('error >> ', error)
    }



  }
  console.log("çoments ---------- ", Comnt);


  useEffect(() => {
    fetching()

  }, [page])

  // useEffect(() => {
  //   console.log('kokiiiiiiiiiiiii-------iiiiiiiiiiiiii');

  //   // window.addEventListener("scroll", handleScroll);

  //   // return () => { window.removeEventListener("scroll", handleScroll); }
  // }, [loading])


  return (
    <>
      <div style={{ position: 'fixed' }} >
        {/* <button onClick={() => { setPage((page - 1)) }}> previous </button>
        <button onClick={() => { setPage((page + 1)) }}> forward </button> */}
        <button onClick={sceck}>   Check   </button>
      </div>
      <div

      >
        {
          Comnt.map((d, i) => {
            return <motion.ol
              initial={{ opacity: 0, y: 80 }}   
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              whileHover={{ scale: 1.1 }}
              style={{ padding: '30px 0', backgroundColor: 'beige' }}
            >
              {i} - <strong>{d.id}</strong>  |  {d.body} <hr />
              <strong>Likes :  </strong>{d.likes}
              <strong>   user name : </strong>{d.user.fullName}
            </motion.ol>
          })
        }
        {
          loading && <div>Loading ....</div>
        }
      </div>
    </>
  )
}
