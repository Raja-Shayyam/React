import { useContext, useState } from 'react'
import { Theme } from './store'
import { CounterCOMP } from './counterCOMP'

export const MainCompo = () => {
  const [initB, setB] = useState({
    background: "lavender",
    color: 'rgba(64, 56, 56, 1)'
  })
  const { theme, seTheme ,count,setCount} = useContext(Theme);

  return (
    <div className='min-div' style={{ background: initB.background , color: initB.color}}>
      <h2>Theme Switcher</h2>
      <button
        onClick={() => {
          const Toggle = theme == 'light' ? 'Dark' : 'light'
          Toggle == 'light' ? (setB({
            background: "lavender",
            color: 'rgb(110, 110, 110)'
          })) : (setB({
            background: "rgb(54, 54, 77)",
            color: 'wheat '
          }))
          // 'rgb(54, 54, 77)'
          seTheme(Toggle)
          setCount(count + 1)
        }}>
        Switcher
      </button>
      <p style={{ padding: "10px 0px" }}>current Theme is : - {theme} -</p>
      <CounterCOMP value={initB.color}/>
    </div>
  )
}


