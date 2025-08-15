import { GloablHook } from "./store/context"



export const Items = ({ e }) => {
  //   console.log('items');
  //   console.log(e.products);
  // const [d,sd]=useState([])
  //   let a = []
  //   // e.products.forEach((fe) => {
  //   //   a.push(fe)
  //   // })
  //   e.products.map((mp)=>{
  //     console.log('--',mp.id)
  //     a.push(mp.id)
  //   })
  //   a.forEach((fe) => {
  //     console.log('>> ', fe);
  //     sd(fe)
  //   })
  // console.log(d);
  const ee = e
  const { removeItem, addToCart } = GloablHook()

  return (
    <div>
      {
        // return <li> {ee.title} || <strong>{ee.id}</strong>  || <strong>{ee.price}</strong></li> 
        <><div className="modal-dialog bg-light mb-3 p-2" >
          <div className="modal-content rounded-3 shadow">
            <div className="modal-body p-4 text-center">
              <h5 className="mb-2">{ee.title}</h5>
              <h6 className="mb-1"><strong>ID: </strong> {ee.id}</h6>
              <h6 className="mb-1"><strong>Price: </strong> {ee.price}</h6>
              <h6 className="mb-1"><strong>Quantity: </strong> {ee.quantity}</h6> needed: <input type="number" />
            </div>
            <div className="modal-footer flex-nowrap p-0 ">

              <button type="button" className="btn btn-lg  btn-outline-primary fs-6 text-decoration-none col-6 py-3 m-0 rounded-18 border-end"
                onClick={() => { addToCart(ee.id , ee.quantity) }}
              >
                <strong>Yes, Add in cart</strong>
              </button>

              <button
                type="button"
                className="btn btn-lg btn-link btn-outline-danger fs-6  text-decoration-none col-6 py-3 m-0 rounded-8"
                data-bs-dismiss="modal"
                onClick={() => removeItem(ee.id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
        </>
      }

    </div>
  )
}
