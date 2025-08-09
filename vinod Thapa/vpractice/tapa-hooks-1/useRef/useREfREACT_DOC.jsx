import { useRef, useState, useEffect } from 'react';

function Timer() {
  const countRef = useRef(0);
  // console.log(countRef);
  const[state,setSatate] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      countRef.current += 1;
      setSatate(true)
      // console.log(`Count: ${countRef.current}`); // Logs without re-rendering
    }, 1000);
    return () => {clearInterval(interval) ; setSatate(false)};
  }, [state]);

  return <div>Check for timer count : {countRef.current}</div>;
}

export default Timer;