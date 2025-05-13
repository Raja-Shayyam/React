export function List()
{
  let task1 = 'milk';
  let task2 = 'walking';



  return<div>
    <div>{task1} at 2/3/12 <button>delete</button></div>
    <div>{task2} at 3/4/23 <button>delete</button></div>
    {/* <ol>{'task3'} at 3/4/23 <button>delete</button></ol> */}
  </div>;
}