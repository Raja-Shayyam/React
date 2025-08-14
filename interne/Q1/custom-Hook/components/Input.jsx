import { useRef } from "react"
import { customhook } from "../store/Store"

export const Input = () => {
  const {setDelayed , setshow} = customhook()
  const myTime = useRef(null)
  const setingTime=()=>{
    // console.log(myTime.current.value)
    setshow(false)
    setDelayed(myTime.current.value)
  }

  return (
    <div>
      <input type="number" ref={myTime} placeholder="entre values in seconds ... "/>
      <hr />
      <button onClick={setingTime}> proceed </button>
    </div>
  )
}
