import style from "../allCSS/foods.module.css"

const Foods = ({fooditem})=>{
console.log("> ", {fooditem} )
  return(
    <>
      <li className={`${style['my-li']}`} >mash ki daal</li>
      {
        fooditem.map((fi)=>
          <li className={`${style['my-li']}`} key={fi}>{fi}</li>
      )}

      <div className={`${style['my-span']}`}>Items in cart {fooditem.length} </div>
    </>
  );
};

export default Foods;