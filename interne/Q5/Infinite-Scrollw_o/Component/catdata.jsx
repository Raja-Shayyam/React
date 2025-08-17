import { useEffect, useState } from "react"


const API = 'https://api.freeapi.app/api/v1/public/cats'

export const LongData = () => {

  const [Cats, setCats] = useState([])
  const [page, setPage] = useState(0)

  const fetching = async () => {
    try {
      const res = await fetch(`https://api.freeapi.app/api/v1/public/cats?page=${page}`)
      const Data = await res.json()
      console.log(Data);
      setCats(Data.data.data)
      setPage(Data.data.page)
      console.log(Data.data.page);
      // setPage(Data.data.page)

    } catch (error) {
      console.log('error >> ', error)
    }

  }

  useEffect(() => {
    fetching()
  }, [page])
  return (
    <>
    <div>
      <button onClick={()=>{setPage(page-1)}}> previous </button>
      <button onClick={()=>{setPage(page+1)}}> forward </button>
    </div>
      <div>
        {
          Cats.map((d) => {
            return <ol>{d.name} <br /> <img style={{ width: "70px", height: '80px' }} src={d.image} alt={d.life_span} /></ol>
          })

        }
      </div>
    </>
  )
}
