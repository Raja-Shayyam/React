
export const Card = ({cData})=>{
console.log('card salam')
  return(<>
<div className="col-md-4">
    <div className="card user-card">
      <div className="card-header">
        <h5>Profile</h5>
      </div>
      <div className="card-body text-center">
        <div className="user-image mb-3">
          <img
            className="img-radius"
            src={cData.url} // profile phote is <-- here 
            alt="User-Profile"
          />
        </div>
        <h6 className="fw-semibold mb-1">{cData.title}.</h6>
        <p className="text-muted mb-2">Active | {cData.user} | Born 23.05.1992</p>
        <hr />
        <p className="text-muted mb-2">Activity Level: 87%</p>
        {/* <ul className="list-unstyled activity-level d-flex justify-content-center gap-1 mb-3">
          <li className="active"></li>
          <li className="active"></li>
          <li className="active"></li>
        </ul> */}
        <div className="counter-block bg-c-blue text-center p-3 rounded mb-3">
          <div className="row text-white">
            <div className="col-0">
              <i className="fa fa-comment"></i>
              <p className="mb-0">{cData.description}</p>
            </div>
            {/* <div className="col-4">
              <i className="fa fa-user"></i>
              <p className="mb-0">8562</p>
            </div>
            <div className="col-4">
              <i className="fa fa-suitcase"></i>
              <p className="mb-0">189</p>
            </div> */}
          </div>
        </div>
        <p className="text-muted mb-3">
          Lorem ipsum is simply dummy text of the printing and typesetting industry.
        </p>
        <hr />
        <div className="user-social-link d-flex justify-content-center gap-2">
          <a href="#!" className="text-facebook">Facebook<i className="fa fa-facebook"></i></a>
          <a href="#!" className="text-twitter">twitter<i className="fa fa-twitter"></i></a>
          <a href="#!" className="text-dribbble">dribbble<i className="fa fa-dribbble"></i></a>
        </div>
      </div>
    </div>
  </div>

  </>)
}