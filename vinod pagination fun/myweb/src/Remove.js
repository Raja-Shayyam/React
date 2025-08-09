import { GloablHook } from "./contextStore"


export const Remove = ({e}) => {
  return (
    <button className="btn btn-outline-warning fw-semibold px-4 py-2"
      // onClick={()=>removeItem(e.objectID)}
    >
      Remove 
    </button>
  )
}
