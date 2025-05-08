import Foods from "./foods";
import style from "../allCSS/list.module.css";

console.log('list');
export function List({Items})
{
  let i = Items;
console.log('list items', i)
  return(
  <>
    <ul className={`${style['my-foods']}`}
      style={{
        margin : 5+'px',
        paddingLeft : 3+'px'
      }}
    >
       
       <li className={`${style['my-li']}`} >mash ki daal</li>
       {
          Items.map((Itm)=><Foods fooditem={Itm} 
          clickbtnWorking={
                ()=>console.log('buyed ' , Itm)
          }
         ></Foods> )
       }

    </ul>
    <div className={`${style['my-span']}`}>Items in cart {Items.length} </div>
  </>
  );
}

// i.map((itm)=>{
  // <Foods fooditem={itm}>.</Foods>
// })