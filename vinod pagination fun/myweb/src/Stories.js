import { GloablHook } from './contextStore';
import { CardCOMP } from './CardCOMP';
import './stories.css'

// import { r } from "./Search";
// let html= '';
export const Stories = () => {
  const { hits, isLoading } = GloablHook();


  return (
    <div className="bodr-div">
      {/* {isLoading==true ?<h6>Loading...</h6> : <h5>Stories</h5>} */}
      <h5>Stories</h5>
      {isLoading && <h3>Loading...</h3>}
      {hits.map((e) => {
        return (
          // <li className='alin-li' key={e.objectID}>author : {e.author} ----- {e.title}</li>
          <CardCOMP e={e}/>
        )
      })}.
    </div>
  )
}
