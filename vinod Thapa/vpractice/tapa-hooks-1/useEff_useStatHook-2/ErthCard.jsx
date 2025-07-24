
export const ErthCard = ({curData})=>{
  return<>
    <div className="col-md-4" >
        <div className="card custom-card">
          {console.log(curData.image)}
          <img 
              src={`https://epic.gsfc.nasa.gov/archive/enhanced/2015/10/31/png/${curData.image}.png`} 
              // src={`https://epic.gsfc.nasa.gov/archive/enhanced/2015/10/31/png/epic_RGB_20151031041238.png`} 
              className="card-img-top" 
              alt={curData.identifier || "Earth image from NASA EPIC"}
          />
          <div className="card-body">
            <h5 className="card-title">{curData.caption}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{curData.date}</h6>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <div>
              <h5>discovered Positions</h5>
              <li>x: {curData.dscovr_j2000_position.x}</li>
              <li>y: {curData.dscovr_j2000_position.y}</li>
              <li>z: {curData.dscovr_j2000_position.z}</li>
            </div>
            <a href="#" className="btn custom-btn me-2"><i className="fas fa-link"></i> Visit Site</a>
            <a href="#" className="btn custom-btn"><i className="fab fa-github"></i> Github</a>
          </div>
        </div>
      </div>

  </>
}