import React, { useEffect, useState } from 'react'

export const Dumy = () => {
  const [comt, setComt] = useState([])
  const [ch, setCh] = useState(0)

  function C() {
    const a = [1, 2, 3, 4, 5, 6, 7]
    setComt((u) => [...u, ...a])
    console.log('andr comt ', comt);
  }
  console.log('\n\a comnt ', comt);

  useEffect(() => {
    C()
  }, [ch])

  return (<>
    <div>Dumy</div>
    <button onClick={() => { setCh(ch + 1) }}>Click me</button>
  </>
  )
}
