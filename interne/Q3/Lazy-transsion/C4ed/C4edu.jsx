import { lazy, useEffect, Suspense, useState, useTransition } from "react"
// import { List } from "./list";
const List = lazy(() => import("./list"));
import { Text } from "./text";

export const C4edu = () => {
  // Example 1
  // const [count, setCount] = useState(0)
  // const [isPending, startTransition] = useTransition();

  // useEffect(() => {
  //   console.log('useEffect runs ... ');

  // },[count])
  // const updation = () => {
  //   startTransition(() => {
  //     console.log('hi');
  //     setCount(count + 1)
  //   })
  //   console.log('salam');
  // }

  // example 2

  let size = 10000;
  const [input, setInput] = useState('')
  const [dataList, setDataList] = useState([8])
  const [isPending, startTransition] = useTransition();


    
  

  const handlingInput = (e) => {
    setInput(e.target.value)

    startTransition(() => {
      const val = e.target.value;
      const a = []
      for (let ii = 0; ii < size; ii++) {
        a.push(val);
      }
      setDataList(a)
    })
  }

  return (
    <div>
      {/* <h3>this is : {count}</h3>
      <button onClick={updation}> Update </button> */}
      <input type="text" placeholder="Entre values ... " value={input} onChange={handlingInput} />
      <Suspense fallback={<div>Loading...</div>}>
        <List value={{dataList,isPending}}/>
      </Suspense>
      <Text/>
      {/* <List value={{dataList,isPending}}/> */}
      {/* <List dataList={dataList} isPending={isPending} /> */}
    </div>
  )
}
