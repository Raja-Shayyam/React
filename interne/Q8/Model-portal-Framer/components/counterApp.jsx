import { useEffect, useState } from "react"



export const CounterApp = ({ setShowScreen }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {

    if (count > 10) {
      setShowScreen(true)
    }
  },[count,setShowScreen])

  return (
    <div>
      <div className="container py-5 d-flex flex-column align-items-center justify-content-center min-vh-100 text-center bg-warning ">
        <div className="mb-4 bg-light rounded-pill p-2">
          <span className="text-muted fs-5">Counter app</span>
        </div>

        <h1 className="fw-bold display-4">Vite + React</h1>

        {/* Bootstrap card to style the counter component */}
        <div className="card shadow-lg p-5 " style={{ maxWidth: '400px', width: '100%', borderRadius: '1rem' }}>
          <div className="card-body">
            <button
              className="btn btn-primary btn-lg rounded-pill fw-bold"
              onClick={() => setCount((count) => count + 1)}
            >
              count is {count}
            </button>
            <p className="card-text mt-3 text-muted">
              Edit <code>src/App.jsx</code> and save to test HMR
            </p>
          </div>
        </div>

        <p className="text-muted mt-4">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </div>
  )

}
