import style from '../../allCSS/list_items.module.css'

export function List({toDo})
{
  console.log(toDo);
  
  return(
    <>
  <div className={style['listname']}>
    <div className={style['list-div']}>todo  . at  . todo <button>delete</button>
    </div>
  {
      toDo.map((mydOs)=> <div className={style['list-div']} key={mydOs.dueDate}>
        { mydOs.name}  . at  . 
        {mydOs.dueDate} 
        <button className={style['list-btn']}>delete</button>
    </div>
  )}
   
  </div>
  </>
  );
}

//<div>{todo}  . at  . {todo} <button>delete</button></div>

/* { <ol>{'task3'} at 3/4/23 <button>delete</button></ol> }*/