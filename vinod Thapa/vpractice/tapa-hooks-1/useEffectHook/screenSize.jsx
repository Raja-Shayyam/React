import { useEffect, useState } from "react";

export const ScreenSize =()=>{
  const [Swidth,setSwidth] = useState(window.screen.width)
  const [Sheight,setSheight] = useState(window.screen.height)

  const myResizeEvent=()=>{
    console.log(window.innerHeight)
    setSheight(window.innerHeight)
    setSwidth(window.innerWidth)
  }

  useEffect(()=>{
    console.log('ading')
    window.addEventListener('resize',myResizeEvent)
    return()=>{
      console.log('removing')
      window.removeEventListener('resize',myResizeEvent)
    }
  })

  return<>
    <h1>Screen width now: {Swidth}</h1>
    <hr />
    <h1>Screen height now: {Sheight}</h1>
  </>
}
