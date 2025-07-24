import { GiNorthStarShuriken } from "react-icons/gi";
import { PiCheckSquareOffsetThin } from "react-icons/pi";

import style from '../css/in-put.module.css'


const Inputs = () => {

  return (
    <>
      <div className={style.dv}>
        <input type="text" placeholder="Entre Course name" className={style.str}/>
      </div>

      <div className={style.dv}>
        <span className={style.str}>
          <GiNorthStarShuriken />
        </span>
        <span className={style.str}>
          <GiNorthStarShuriken />
        </span>
        <span className={style.str}>
          <GiNorthStarShuriken />
        </span>
        <span className={style.str}>
          <GiNorthStarShuriken />
        </span>
        <span className={style.str}>
          <GiNorthStarShuriken />
        </span>
      </div>

      <div id={style.dn} className={style.dv}>
        <PiCheckSquareOffsetThin />
      </div>
    </>
  );
}

export default Inputs;