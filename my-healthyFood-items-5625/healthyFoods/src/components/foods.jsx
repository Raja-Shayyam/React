// import React, {useState} from "react"
import style from "../allCSS/foods.module.css"
// import Brought from "./bought_items"

const Foods = ({fooditem , clickbtnWorking })=>{
//console.log("> ", {fooditem} )
// const clickbtnWorking = (fi)=>{
//   console.log(fi)
// }

  return(
    <>
      
      {
        
          <li className={`${style['my-li']}`} 
            key={fooditem}>{fooditem} 
          
          <button className={style.btn}
            onClick={ clickbtnWorking }
          >
            Buy
            </button>
            
            </li>
      }

      

      
    </>
  );
  
};

export default Foods;


/**
 * import React, {useState} from "react"
import style from "../allCSS/foods.module.css"
import Brought from "./bought_items"

-> actullay it will /be 
* const Foods = (props)=>{...}
return ... props.fooditem.map((fi)=>

const Foods = ({fooditem})=>{
console.log("> ", {fooditem} )

const [buy, setBuy] = useState(null);

if(fooditem.length !== 0){
  const clickbtnWorking = (fi)=>{
    console.log(fi)
    setBuy(fi);
    // buy = fi;
    // console.log('> ',buy)
  }
  // console.log(buy)
  // function clickbtnWorking(fi)
  // {<Brought buyed={buy}></Brought>
  //   console.log(fi)
  // }

  return(
    <>
      <li className={`${style['my-li']}`} >mash ki daal</li>
      {
        fooditem.map((fi)=>
          <li className={`${style['my-li']}`} key={fi}>{fi} <button className={style.btn}
            onClick={
              ()=>clickbtnWorking(fi)
              
            }
          >
            Buy
            </button></li>
      )}

      <div className={`${style['my-span']}`}>Items in cart {fooditem.length} </div>

      <Brought buyed={buy}></Brought>
    </>
  );

}
  
};

export default Foods;

 * 
 * 
 * 
 * 
 * return(
    <>
      <li className={`${style['my-li']}`} >mash ki daal</li>
      {
        fooditem.map((fi)=>
          <li className={`${style['my-li']}`} key={fi}>{fi} <button className={style.btn}
            onClick={
              ()=>console.log(fi)
            }
          >
            Buy
            </button></li>
      )}

      <div className={`${style['my-span']}`}>Items in cart {fooditem.length} </div>
    </>
  );
 */