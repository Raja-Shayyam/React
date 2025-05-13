import { useState } from "react";


export function HeadingList({clickEvent})
{
  let [task , setTask ] = useState('');
  let [taskduedate , settaskduedate] = useState ('');

  const handlingtask =(e)=>{
    setTask(e.target.value);
  }
  
  const handlingduedate =(e)=>{
    settaskduedate(e.target.value);
  }
  
  const handleADDbtn = ()=>{
    clickEvent(task , taskduedate)
    setTask('')
    settaskduedate('')
  }

  return <div id="heading-list">
      <div>
        <input type="text" placeholder='put your Tasks here ... ' 
        value={task}
        onChange={handlingtask}
        />
      </div>
      <div>
        <input type="date" 
        value={taskduedate}
        onChange={handlingduedate}
        />
      </div>
      <br />
      <div id="add-btn">
        <button
        onClick={handleADDbtn}
        >
          Add
        </button>
      </div>
  </div>;

}