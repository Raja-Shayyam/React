import { useRef, useState } from "react"
import { PostingData } from "../getAXI0S/axiousing"
import { GloablHook } from "../store/context"
import { useEffect } from "react"


export const Newuser = () => {
  const { setuser, myuser } = GloablHook()
  const Uimg = useRef(null)
  const Uname = useRef(null)
  const Udate = useRef(null)
  const Uemail = useRef(null)
  // const Ustatus = useRef(null)
  const [Ustatus, setStatus] = useState('')
  const Ucity = useRef(null)

  const userLen = myuser.length

  const addData = async (postingdata) => {
    try {
      const res = await PostingData(postingdata)
      console.log('> ', res);

      if (res.status === 201) {
        setuser((dataa) => [...dataa, res.data])
        alert(`${postingdata.name} is now ADDEd`)
        Uname.current.value = ''
        Udate.current.value = ''
        Uemail.current.value = ''
        setStatus('')
        Ucity.current.value = ''
      }
      else
        console.error('not 201');
    } catch (error) {
      console.log(error.message);
      console.log(error.response.status);
      console.log(error.response.data);
    }
  }
  const handleInputs = (e) => {
    e.preventDefault()
    console.log('ímg', Uimg,Uname
      
    );
    const userimg = Uimg.current.files[0]
    const postingdata = {
      id: userLen + 1,
      image: userimg,
      name: Uname.current.value,
      email: Uemail.current.value,
      date: Udate.current.value,
      status: Ustatus,
      city: Ucity.current.value
    }
    addData(postingdata);
  }
  // const handleInputs = (e) => {
  //   e.preventDefault()

  //   console.log('çlicked', mytitle.current.value, e);

  //   const postingdata = {
  //     id: nid + 1,
  //     title: mytitle.current.value,
  //     body: mybody.current.value,

  //   }
  //   console.log(postingdata.id);

  //   addData(postingdata);
  // }

  return (
    <div className="container">
      <form className="card p-4" onSubmit={handleInputs}>
        <div className="row g-3">

          {/*? <div className="col-12">
            <label htmlFor="firstimg" className="form-label fw-bold">Image</label>
            <input
              type="file"
              className="form-control"
              id="firstimg"
              ref={Uimg}
            />
          </div> */}
          {/* Name Field */}
          <div className="col-12">
            <label htmlFor="firstName" className="form-label fw-bold">Name</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              ref={Uname}
            />
          </div>
          <div className="col-12">
            <label htmlFor="firstName" className="form-label fw-bold">E-mail</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
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
                onChange={(e) => { setStatus(e.target.value); }}
                required>
                <option value="">Choose...</option>
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
              ref={Udate}
            />
          </div>

          {/* Submit Button */}
          <div className="col-12">
            <button type="submit" className="btn btn-secondary w-100">
              Add User
            </button>
          </div>
        </div>
      </form>
    </div>

  )
}