import React, { useState }  from "react";
import Container from "./Container";
import Foods from "./foods";
import style from "../allCSS/list.module.css";

console.log('list');
export function List({Items})
{
  let [buyeditem , joBuyKiya_abi ] = useState (['not buyed yet anyThing']);
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
              ()=>{
                console.log('buyed ' , Itm)
                let newary = [...buyeditem , Itm]
                joBuyKiya_abi(newary)
              }
          }
         ></Foods> )
       }

    </ul>
    <div className={`${style['my-span']}`}>Items in cart {Items.length} </div>
    
    <Container>
    {
      buyeditem.map((buyediteM)=><li>{buyediteM}</li>)
    }
    </Container>

  </>
  );
}

// i.map((itm)=>{
  // <Foods fooditem={itm}>.</Foods>
// })