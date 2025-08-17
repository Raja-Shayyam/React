import { useEffect } from "react"
import ReactDOM from 'react-dom';
import { motion } from "motion/react"
// classNameName="updte"
export const Model = ({ close, children }) => {
  useEffect(() => {
    document.body.style.overflowY = 'hidden'
    return () => {
      document.body.style.overflowY = 'scroll'
    }
  }, [])

  return ReactDOM.createPortal(
    <div className="model-con" onClick={e => e.stopPropagation()}>

      {children}

    </div>,
    document.getElementById("model-portal")
  )
}