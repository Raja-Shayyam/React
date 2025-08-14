import { customhook } from '../store/Store'
import { useEffect } from 'react'

export const Outout = () => {
  const { delayed, setshow, show } = customhook()
  useEffect(() => {
    setTimeout(() => {
      console.log("Runs once after 2 seconds");
      setshow(true)
    }, delayed * 1000)
  })
  return (<>
    {show && <p>this is time : {delayed} seconds</p>}
  </>)
}

