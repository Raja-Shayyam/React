import style from '../../allCSS/list_items.module.css'

export function List({toDo , onDelete_btn})
{
  console.log(toDo);
  let i=0;
  return(
    <>
  <div className={style['listname']}>
    {/* <div className={style['list-div']}>todo  . at  . todo <button>delete</button>
    </div> */}
  {
      toDo.map((mydOs)=> <div className={style['list-div']} key={i++}>
        <span> 
          { mydOs.name}  . at  . 
          {mydOs.dueDate} 
        </span>
        <button className={style['list-btn']}
          onClick={()=>onDelete_btn(mydOs.name)}
        >delete</button>
    </div>
  )}
   
  </div>
  </>
  );
}

//<div>{todo}  . at  . {todo} <button>delete</button></div>

/* { <ol>{'task3'} at 3/4/23 <button>delete</button></ol> }*/