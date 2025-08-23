import React, { useReducer, useRef, useState } from 'react'
import { UpdateUser } from '../getAXI0S/axiousing'
import { GloablHook } from '../store/context'

export const EditUser = ({ setuser }) => {
  const { updation } = GloablHook()
  const Uname = useRef(null)
  const Uemail = useRef(null)
  const Ucity = useRef(null)
  const Udate = useRef(null)
  const [Ustatus, setStatus] = useState(updation.status)

  const userReducer = (state, action) => {
    switch (action.type) {
      case "UPDATE_USER":
        return [...state, action.payload]
      default:
        return state
    }
  }

  const [users, dispatch] = useReducer(userReducer, [])


  const addData = async (ID, postingdata) => {
    try {
      const res = await UpdateUser(ID, postingdata)
      if (res.status === 200) {
        dispatch({ type: "ADD_USER", payload: res.data })
        alert(`${postingdata.name} is now Updated`)
        setuser(users)
      } else {
        console.error('not 201')
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleInputs = (e) => {
    e.preventDefault()

    const postingdata = {
      id: updation.id,
      name: Uname.current.value,
      email: Uemail.current.value,
      date: Udate.current.value,
      status: Ustatus,
      city: Ucity.current.value,
    }
    addData(postingdata.id, postingdata)
  }


  return (
    <div className="container">
      <form className="card p-4" onSubmit={handleInputs}>
        <div className="row g-3">
          {/* Name Field */}
          <div className="col-12">
            <label htmlFor="firstName" className="form-label fw-bold">Name</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              defaultValue={updation.name}
              ref={Uname}
            />
          </div>
          <div className="col-12">
            <label htmlFor="firstName" className="form-label fw-bold">E-mail</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              defaultValue={updation.email}
              ref={Uemail}
            />
          </div>
          <div className="col-12">
            <label htmlFor="firstName" className="form-label fw-bold">Status</label>
            <div className="col-md-5">
              <label htmlFor="country" className="form-label">
                Status
              </label>

              <select className="form-select" id="country"
                onChange={(e) => { setStatus(e.target.value) }}
                // ref={Uselection}
                value={Ustatus}
                required>
                {/* <option></option> dewewefrr45 * /}
                {/* <option value="">Choose...</option> */}
                <option value="Pending">Pending</option>
                <option value="Cancelled">Cancelled</option>
                <option value="complete">complete</option>
              </select>

              <div className="invalid-feedback">
                Please select a valid country.
              </div>
            </div>

            {/* <input
              type="text"
              className="form-control"
              id="firstName"
              ref={Ustatus}
            /> */}
          </div>
          <div className="col-12">
            <label htmlFor="firstName" className="form-label fw-bold">City</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              defaultValue={updation.city}
              ref={Ucity}
            />
          </div>

          {/* Date Field */}
          <div className="col-12">
            <label htmlFor="lastName" className="form-label fw-bold">Date</label>
            <input
              type="date"
              className="form-control"
              id="lastName"
              defaultValue={updation.date}
              ref={Udate}
            />
          </div>

          {/* Submit Button */}
          <div className="col-12">
            <button type="submit" className="btn btn-warning w-100">
              User UpDate !
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

// <div className="container">
//       <form className="card p-4" onSubmit={handleInputs}>
//         <div className="row g-3">
//           {/* Name Field */}
//           <div className="col-12">
//             <label htmlFor="firstName" className="form-label fw-bold">Name</label>
//             <input
//               type="text"
//               className="form-control"
//               id="firstName"
//               ref={Uname}
//             />
//           </div>
//           <div className="col-12">
//             <label htmlFor="firstName" className="form-label fw-bold">E-mail</label>
//             <input
//               type="text"
//               className="form-control"
//               id="firstName"
//               ref={Uemail}
//             />
//           </div>
//           <div className="col-12">
//             <label htmlFor="firstName" className="form-label fw-bold">Status</label>
//             <div className="col-md-5">
//               <label htmlFor="country" className="form-label">
//                 Status
//               </label>

//               <select className="form-select" id="country"
//                 onChange={(e) => { setStatus(e.target.value); }}
//                 required>
//                 <option value="">Choose...</option>
//                 <option value="Pending">Pending</option>
//                 <option value="Cancelled">Cancelled</option>
//                 <option value="complete">complete</option>
//               </select>

//               <div className="invalid-feedback">
//                 Please select a valid country.
//               </div>
//             </div>

//             {/* <input
//               type="text"
//               className="form-control"
//               id="firstName"
//               ref={Ustatus}
//             /> */}
//           </div>
//           <div className="col-12">
//             <label htmlFor="firstName" className="form-label fw-bold">City</label>
//             <input
//               type="text"
//               className="form-control"
//               id="firstName"
//               ref={Ucity}
//             />
//           </div>

//           {/* Date Field */}
//           <div className="col-12">
//             <label htmlFor="lastName" className="form-label fw-bold">Date</label>
//             <input
//               type="date"
//               className="form-control"
//               id="lastName"
//               ref={Udate}
//             />
//           </div>

//           {/* Submit Button */}
//           <div className="col-12">
//             <button type="submit" className="btn btn-secondary w-100">
//               Redeem
//             </button>
//           </div>
//         </div>
//       </form>
//     </div>