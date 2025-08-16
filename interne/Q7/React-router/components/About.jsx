import React from 'react'

export const About = () => {
  console.log('abo');
  let a = []
  for (let index = 0; index < 200; index++) {
    a.push(index)
  }

  return (
    <div>
      About
      <p>
        {a.map((e) => <li>{e}</li>)}
      </p>
    </div>
  )
}
