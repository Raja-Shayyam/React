import Foods from "./foods";
import style from "../allCSS/list.module.css";

console.log('list');
export function List({Items})
{
  let i = Items;
console.log('list items', i)
  return(
  <>
    <ul class={`${style['my-foods']}`}
      style={{
        margin : 5+'px',
        paddingLeft : 3+'px'
      }}
    >
        {
         <Foods  fooditem={Items}>.</Foods>
        }
    </ul>
  </>
  );
}

// i.map((itm)=>{
  // <Foods fooditem={itm}>.</Foods>
// })