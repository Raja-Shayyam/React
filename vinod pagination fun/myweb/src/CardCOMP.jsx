import { GloablHook } from "./contextStore"


export const CardCOMP = ({ e }) => {
  const {removeItem} = GloablHook()

  return (
    <div className="container" key={e.story_id}>
      <div className="row ">
        <div className="col-lg-7 ">
          <div className="card card-margin alin-li">
            <div className="card-header no-border">
              <h5 className="card-title text-capitalize  text-decoration-underline mx-auto fs-2" style={{ fontSize: '24px', fontFamily: "Arial " }}>{e.author}</h5>
            </div>
            <div className="card-body pt-0">
              <div className="widget-49">
                <div className="widget-49-title-wrapper">
                  <div className="widget-49-date-primary">
                    <span className="widget-49-date-day">09</span>
                    <span className="widget-49-date-month">apr</span>
                  </div>
                  <div className="widget-49-meeting-info">
                    <span className="widget-49-pro-title  text-body-emphasis fw-semibold" style={{ fontSize: '18px' }}>{e.title}</span>
                    <span className="widget-49-meeting-time">{e.updated_at}</span>
                  </div>
                </div>
                <ol className="widget-49-meeting-points">
                  <p className=" px-4 py-2 fw-semibold">Total Comments :
                    <span className="text-primary"> {e.num_comments}
                    </span>
                  </p>

                </ol>
                <div className="widget-49-meeting-action d-flex justify-content-between align-items-center p-3">
                  <button className="btn btn-outline-warning fw-semibold px-4 py-2"
                    onClick={() => removeItem(e.objectID)}
                  >
                    Remove
                  </button>
                  <a href={`${e.url}`} className="btn btn-sm text-primary px-4 py-2 ">View All</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
