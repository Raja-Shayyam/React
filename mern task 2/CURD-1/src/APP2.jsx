import { useEffect, useState } from "react"
import { Axious2 } from "../APP2axious/axious2"



export const APP2 = () => {
  const [data, setData] = useState([])
  const [pg, setPg] = useState(0)

  const hndlepag = (e) => {
    setPg(e.target.value)
    console.log(e.target.value);
  }

  const getMovies = async () => {
    try {
      const res = await Axious2(pg)
      console.log(res);
      setData(res.data.Search || [])
    } catch (error) {
      console.log(error);
      console.log(error.message);
      console.log(error.response.status);
      console.log(error.response.data);

    }
  }

  useEffect(() => {
    getMovies()
  }, [pg])

  return (
    <div className="container">
      <div>
        <input type="number" placeholder="write numer of page ..." onChange={hndlepag} />
      </div>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {pg?
          data.map((d) => (
            <li key={d.imdbID}>
              <div className="col">
                <div className="card shadow-sm">
                  <img
                    className="bd-placeholder-img card-img-top"
                    width="100%"
                    height="225"
                    src={d.Poster}
                  />

                  <div className="card-body">
                    <p className="card-text">
                      {d.Title}
                    </p>
                    <p className="card-text">
                      {d.Type}
                    </p>

                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Edit
                        </button>
                      </div>
                      <small className="text-body-secondary">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))
          :
          <div>'Waiting ......'</div>
        }
      </div>
    </div>
  )
}
