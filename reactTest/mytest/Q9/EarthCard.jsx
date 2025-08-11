
export const ErthCard = ({curData})=>{
  return<>
    <div className="col-md-4" >
        <div className="card custom-card">
          {/* {console.log(curData.image)} */}
          <img 
              src={`${curData.image}`} 
              // src={`https://epic.gsfc.nasa.gov/archive/enhanced/2015/10/31/png/epic_RGB_20151031041238.png`} 
              className="card-img-top" 
              alt={curData.identifier || "Earth image from NASA EPIC"}
          />
          <div className="card-body">
            <h5 className="card-title">{curData.name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{curData.date}</h6>
            <p className="card-text">{}</p>
            <div style={{paddingBottom:"10px"}}>
              <h5>discovered Positions</h5>
              {curData.ingredients.map((e)=>(<li>{e}</li>))}
            </div>
            <a href="#" className="btn custom-btn me-2"><i className="fas fa-link"></i> Visit Site</a>
            <a href="#" className="btn custom-btn"><i className="fab fa-github"></i> Github</a>
          </div>
        </div>
      </div>

  </>
}