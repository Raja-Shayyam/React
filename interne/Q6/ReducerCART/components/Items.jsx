import { memo, useTransition } from "react"
import { GloablHook } from "./store/context"



const Items = ({ e }) => {
  // export   console.log('items');
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


  const [isPending, startTransition] = useTransition()

  // console.log(e);
  
  const { dispatch, addToCart } = GloablHook()

  const removeItem = (id) => {
    console.log(id);

    startTransition(() => {
      dispatch({
        type: 'GET_REMOVE',
        // payload:id <- mothod 1  >> 2 in under
        payload: {
          id
        }
      })
    })
  }
  return (
    <div>
      {
        // return <li> {e.title} || <strong>{e.id}</strong>  || <strong>{e.price}</strong></li> 
        isPending ?
          <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
            <div
              className="modal-dialog bg-warning rounded shadow-lg mb-3 p-5 text-center max-w-xs w-full flex flex-col justify-center items-center h-[150px]"
            // If you prefer inline style, you can use: style={{ height: '150px' }}
            >
              <span className="fs-6 py-3 px-4 rounded-1 flex justify-center items-center text-3xl">
                🗑️
              </span>
            </div>
          </div>
          : <><div className="modal-dialog bg-light mb-3 p-2" >
            <div className="modal-content rounded-3 shadow">
              <div className="modal-body p-4 text-center">
                <h5 className="mb-2">{e.title}</h5>
                <h6 className="mb-1"><strong>ID: </strong> {e.id}</h6>
                <h6 className="mb-1"><strong>Price: </strong> {e.price}</h6>
                <h6 className="mb-1"><strong>Quantity: </strong> {e.quantity}</h6>
              </div>
              <div className="modal-footer justify-content-around flex-nowrap p-0 ">

                <button type="button" className="btn btn-lg btn-outline-primary fs-6 py-3 px-4 me-2 my-2 rounded-1"
                  onClick={() => { addToCart(e.id, e.quantity) }}
                >
                  <strong>Yes, Add in cart</strong>
                </button>

                <button
                  type="button"
                  className="btn btn-lg btn-outline-primary btn-outline-danger fs-6 py-3 px-4 me-2 my-2 rounded-1"
                  // className="btn btn-lg btn-link  fs-6  text-decoration-none col-6 py-3 m-0 rounded-8"
                  data-bs-dismiss="modal"
                  onClick={() => removeItem(e.id)}
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

export default Items