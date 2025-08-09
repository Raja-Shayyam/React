import { useRef } from "react"
import { GloablHook } from "./contextStore"
import './Search.css'
// export const r=(); .current.value

export const Search = () => {
  // const rslt = useRef();
  const {query ,Serching } = GloablHook()

  return (
    <div className="container">
      {/* {bodr-div} */}
      <div class="container h-100 p-2">
        <div class="d-flex justify-content-center h-100">
          <div class="search">
            <input class="search_input" type="text" placeholder="Search here..." 
              value={query}
              onChange={(e)=>{
                Serching(e.target.value)
                
              }}
            />
            <span href="." class="search_icon">search</span>
          </div>
        </div>
      </div>
    </div>
  )
}

{/* <h5>
        <label htmlFor="serh">Search</label> <input id={'serh'} ref={rslt} />
        <button onClick={() => { console.log(rslt.current.value) }}> Go -{'>>'}</button>
      </h5> */}