import { lazy, Suspense, useEffect, useState, useTransition } from "react"
import { Images } from "./Images"
import { Card } from "./Card"
// const Card = lazy(() => import("./Card"));


const ProdList = () => {
  const [dataList, setdataList] = useState([])
  const [img, setImg] = useState([])
  const [isPemding, startTransition] = useTransition()

  async function fetching() {
    const resp = await fetch('https://dummyjson.com/products')
    const data = await resp.json()

    startTransition(() => {
      console.log(data);

      const a = []
      for (let ii = 0; ii < 40; ii++) {
        a.push(data.products);
      }
      const flattenedArray = [].concat(...a);
      console.log(flattenedArray)
      setdataList(flattenedArray)
    })

    const sli = data.products.slice(0, 10);
    setImg(sli)
    console.log(sli);

  }

  useEffect(() => {
    fetching()
  }, [])

  return (< >
    <div style={{ background: "red", padding: "10px" }}>ProdList
      <Images value={{ img }} />
      {/* <Suspense fallback={<div>Loading...</div>}> */}
      <div>
        {
          isPemding ? 'loading ...' :
            dataList.map((e, i) => {
              return <Card key={i} value={{ e, i }} />
            })
        }
      </div>
      {/* </Suspense> */}
      <Images value={{ img }} />

    </div></>)
}

export default ProdList