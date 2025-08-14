import { lazy, Suspense } from "react";

// import { MyCards } from "./MyCards"
const MyCards = lazy(() => import("./MyCards"));

// 
export const Card = ({ value }) => {
  return (
    <div>
      <div>cards</div>
      <Suspense fallback={'hi....................'}>
        <MyCards value={value} />
      </Suspense>
    </div>

  )
}
export default Card;