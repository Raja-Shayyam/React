import { useEffect, useState } from "react"

const API = 'https://api.freeapi.app/api/v1/public/comnt?query=sociable&page=1&limit=30'


export const LongData = () => {
  const limit = 10

  const [Comnt, setComents] = useState([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
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
      let t = true;
      if (t) {
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
      <div style={{ position: 'fixed' }}>
        {/* <button onClick={() => { setPage((page - 1)) }}> previous </button>
        <button onClick={() => { setPage((page + 1)) }}> forward </button> */}
        <button onClick={sceck}>   Check   </button>
      </div>
      <div >
        {
          Comnt.map((d, i) => {
            return <ol style={{ padding: '30px 0', backgroundColor: 'beige' }}>{i} - <strong>{d.id}
            </strong>              |  {d.body} <hr />
              <strong>Likes :  </strong>{d.likes}
              <strong>   user name : </strong>{d.user.fullName}</ol>
          })
        }
        {
          loading && <div>Loading ....</div>
        }
      </div>
    </>
  )
}


















// import { useEffect, useState } from "react"

// // API example: https://dummyjson.com/comments
// export const LngData = () => {
//   const limit = 25
//   const [comments, setComments] = useState([])
//   const [page, setPage] = useState(1)
//   const [loading, setLoading] = useState(false)
//   const [hasMore, setHasMore] = useState(true)

//   const fetching = async (pageNo) => {
//     if (loading) return
//     setLoading(true)
//     try {
//       const skip = (pageNo - 1) * limit
//       const res = await fetch(
//         `https://dummyjson.com/comments?skip=${skip}&limit=${limit}`
//       )
//       const data = await res.json()

//       if (data.comments.length === 0) {
//         setHasMore(false)
//       } else {
//         // append safely
//         setComments((prev) => {
//           // prevent duplicates if API sends same items
//           const newOnes = data.comments.filter(
//             (c) => !prev.some((p) => p.id === c.id)
//           )
//           return [...prev, ...newOnes]
//         })
//       }
//     } catch (error) {
//       console.log("error >>", error)
//     } finally {
//       setLoading(false)
//     }
//   }

//   const handleScroll = () => {
//     if (
//       window.innerHeight + window.scrollY >=
//       document.documentElement.scrollHeight - 50
//     ) {
//       if (!loading && hasMore) {
//         setPage((prev) => prev + 1) // always update state, not a let variable
//       }
//     }
//   }

//   useEffect(() => {
//     fetching(page)
//   }, [page])

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [loading, hasMore])

//   return (
//     <>
//       <div style={{ position: "fixed", background: "#fff", padding: "10px" }}>
//         <button
//           onClick={() => {
//             if (page > 1) {
//               setComments([]) // replace instead of append
//               setPage((prev) => prev - 1)
//             }
//           }}
//         >
//           Previous
//         </button>
//         <button
//           onClick={() => {
//             setComments([]) // replace instead of append
//             setPage((prev) => prev + 1)
//           }}
//         >
//           Forward
//         </button>
//       </div>

//       <div style={{ paddingTop: "60px" }}>
//         {comments.map((d,i) => (
//           <ol
//             key={d.id}
//             style={{ padding: "30px 0", backgroundColor: "beige" }}
//           >
//             <strong>{d.id} | {i}</strong> | {d.body}
//             <hr />
//             <strong>Likes: </strong>
//             {d.likes} <strong>User: </strong>
//             {d.user.fullName}
//           </ol>
//         ))}
//       </div>

//       {loading && <p style={{ textAlign: "center" }}>Loading...</p>}
//       {!hasMore && <p style={{ textAlign: "center" }}>No more comments</p>}
//     </>
//   )
// }
