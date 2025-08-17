// import '../CSS/testing.css'

export const ModelHovered = ({ setShowScreen }) => {

  // modal-sheet position-static bg-body-secondary

  return (
    <div>
      <div className="modal   d-block  p-4 py-md-5"
        tabIndex="-1" role="dialog" id="modalSignin">
        <div className="modal-dialog">
          <div className="modal-content rounded-4 shadow" style={{ backgroundColor: "#291818b5" }}>
            <div className="modal-header p-5 pb-4 border-bottom-0">
              <h1 className="fw-bold mb-0 fs-2">Sign up for free <br /><strong className='text-primary'>usage more</strong></h1>
              {/* The close button typically would have a handler to close the modal */}
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setShowScreen(false)}></button>
            </div>
            <div className="modal-body p-5 pt-0">
              <form className=""
              // onSubmit={}
              >
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control rounded-3"
                    id="floatingInput"
                    placeholder="name@example.com"
                  // value={email}
                  // onChange={(e) => setEmail(e.target.value)}
                  />
                  <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="password"
                    className="form-control rounded-3"
                    id="floatingPassword"
                    placeholder="Password"
                  // value={password}
                  // onChange={(e) => setPassword(e.target.value)}
                  />
                  <label htmlFor="floatingPassword">Password</label>
                </div>
                <button className="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit">Sign up</button>
                <small className="text-body-secondary">By clicking Sign up, you agree to the terms of use.</small>
                <hr className="my-4" />
                <h2 className="fs-5 fw-bold mb-3">Or use a third-party</h2>
                <button className="w-100 py-2 mb-2 btn btn-outline-secondary rounded-3" type="button">
                  {/* <GoogleIcon /> */}
                  Sign up with Google
                </button>
                <button className="w-100 py-2 mb-2 btn btn-outline-primary rounded-3" type="button">
                  {/* <FacebookIcon /> */}
                  Sign up with Facebook
                </button>
                <button className="w-100 py-2 mb-2 btn btn-outline-secondary rounded-3" type="button">
                  {/* <GithubIcon /> */}
                  Sign up with GitHub
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
