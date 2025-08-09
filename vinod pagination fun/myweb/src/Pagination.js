import { GloablHook } from "./contextStore"

export const Pagination = () => {
  const { page, nbPages , Back , Moveon} = GloablHook()
  return (
    <div className="bodr-div">
      <div className="btn-group" style={{ padding: "10px" }} role="group" aria-label="Basic outlined example">
        <button type="button" className="btn btn-outline-primary" onClick={() => { Back() }}>Prev</button>
        <div class="btn-toolbar btn" role="toolbar" aria-label="Toolbar with button groups">
          <div class="btn-group me-2" role="group" aria-label="First group">
            {/* <button type="button" class="btn btn-primary">1</button>
            <button type="button" class="btn btn-primary">2</button>
            <button type="button" class="btn btn-primary">3</button>
            <button type="button" class="btn btn-primary">4</button> */}
            <span class="btn btn-primary">{page}</span>
            <span class="btn btn-primary"> of </span>
            <span class="btn btn-primary">{nbPages}</span>
          </div>
        </div>
        <button type="button" className="btn btn-outline-primary" onClick={() => { Moveon() }}>Forwd</button>
      </div>
    </div >
  )
}
