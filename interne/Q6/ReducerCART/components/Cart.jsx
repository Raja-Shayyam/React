import React, { useRef, useState } from 'react'
import { GloablHook } from './store/context'

export const Cart = () => {
  const { mycart , setMyCart} = GloablHook()
  const[val , setVal]=useState(0)

  const removE = (id,q) => {
    setMyCart(mycart.filter((prestElem) => {
      // return prestElem.id !== id
      return !(prestElem.id === id && prestElem.quantity === q);
    }))
  }

  
  const add=(q)=>{
    if(val==q)alert('no more')
    else{
      setVal(val+1)
    }
      
  }

  const sub=(q)=>{
    if(val<1)alert('no more remove !')
    else{
      setVal(val-1)
    }
  }






  return (<>
    <div className="bg-light min-vh-100 py-4">
      <div className="container">
        <div className="card mx-auto" style={{ maxWidth: '540px' }}>
          
          {/* Cart Header */}
          <div className="card-header bg-light">
            <h2 className="h5 card-title mb-0">Your Cart</h2>
          </div>

          {/* Cart Item */}
          {mycart.map((mc) => (
            <div className="card-body" style={{borderBottom:"0.8px solid black"}}>
              <div className="row align-items-center">
                <div className="col-4 col-md-3">
                  <img
                    src={mc.thumbnail}
                    alt="M Pro Wireless Earbuds"
                    className="img-fluid rounded"
                  />
                </div>
                <div className="col-8 col-md-9">
                  <h3 className="h6 mb-1">{mc.title}</h3>
                  <p className="text-muted small mb-1">White</p>
                  <div className="d-flex align-items-center mb-2">
                    <span className="h6 font-weight-bold text-success mb-1 me-3">Rs. {mc.discountedTotal}</span>
                    <span className="text-muted small text-decoration-line-through ml-2">Rs. {mc.price}</span>
                    <span className="badge badge-info ml-2">10% Off</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="btn-group btn-group-sm mr-2" role="group">
                      <button type="button" className="btn btn-outline-secondary"
                        onClick={()=>{sub(mc.quantity)}}
                      >
                        &minus;
                      </button>
                      <span className="btn btn-outline-secondary disabled" >{val}</span>
                      <button type="button" className="btn btn-outline-secondary"
                        onClick={()=>{add(mc.quantity)}}
                      >
                        +
                      </button>
                    </div>
                    <span className="btn btn-outline-secondary mx-2 disabled">Totall: {mc.quantity}</span>
                    <button type="button" className="btn btn-link  text-danger p-0 mx-3 ml-auto"
                      onClick={()=>removE(mc.id , mc.quantity)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Order Summary */}
          <div className="card-body border-top">
            <h4 className="h6 mb-3">Order Summary</h4>
            <ul className="list-group list-group-flush">
              <li className="list-group-item d-flex justify-content-between align-items-center px-0 py-1">
                <span className="text-muted">Price (1 item)</span>
                <span>Rs. 1,349</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center px-0 py-1">
                <span className="text-muted">Delivery Charges</span>
                <span className="text-success">Free</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center px-0 py-2 font-weight-bold">
                <span>Amount Payable</span>
                <span>Rs. 1,349</span>
              </li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="card-footer bg-light">
            <div className="d-flex">
              <button className="btn btn-outline-primary flex-grow-1 mr-2">
                Continue Shopping
              </button>
              <button className="btn btn-primary flex-grow-1 ml-2">
                Continue
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </div>

  </>)
}


// {mycart.map(() => {
      
//     })}