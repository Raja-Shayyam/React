import { Items } from "./Items"
import { GloablHook } from "./store/context"

export const Homestore = () => {
  const { carts } = GloablHook()
  // console.log('Home',);


  return (<div style={{backgroundColor : "#6b8787a8" , padding:"10px"}}>
    <h3>Shoping Mart</h3>
    <div>
      {
        carts.map((e, i) => {
          return <Items key={i} e={e} />
        })
      }

    </div>
  </div>)
}
