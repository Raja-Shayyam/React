
// export
const MyCards = ({ value }) => {
  return (
    <div className="col">
      <div className="card shadow-sm">
        <img className="bd-placeholder-img card-img-top center" style={{ width: "250px", height: "300px", margin: "auto" }} src={value.e.images[0]} />
        <title>Placeholder</title>
        <rect width="100%" height="100%" fill="#55595c"></rect>
        <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>

        <div className="card-body">
          <p className="card-text">{value.e.description}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
              <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
            </div>
            <small className="text-body-secondary">9 mins</small>
          </div>
        </div>
      </div>
    </div>
  )
}
export default MyCards