
import { lazy, Suspense } from "react"
import { GloablHook } from "./store/context"
// import { Items } from "./Items"
const Items = lazy(()=> import ("./Items"));


export const Homestore = () => {
  const { carts } = GloablHook()
  // console.log('Home',carts);


  return (<div style={{backgroundColor : "#6b8787a8" ,marginTop:"25px" ,padding:"10px"}}>
    <h3>Shoping Mart</h3>
    
    <div><Suspense fallback="loadings ........ ">
      {
        carts.map((e, i) => (
           <Items key={i} e={e} />
        ))
     }
</Suspense> +
    </div>
    
  </div>)
}
