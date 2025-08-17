import { useState } from "react"
import { Model } from "./ModelComp"

import { motion, AnimatePresence, scale } from "motion/react"
import "../C2mponents/testing.css"
import { Filee } from "./file"

export const MainApp = () => {
  const [screen, setScreen] = useState(false)

  const close = () => setScreen(false)

  const handleKeyDown = (e) => {
    if (e.key !== 'Escape' ) {
      alert(`You submitted: rather than ESC to close`);
    }
    if (e.key === "Escape") {
      close()
      // setScreen(false)
    }
  };




  const MyModel = (
    <Model close={close} motion={motion}>
      <motion.div className="modal modal-sheet position-static d-block bg p-4 py-md-5" tabIndex="-1" role="dialog" id="modalChoice" style={{ backgroundColor: "black" }}
        whileHover={{scale:1.2}}
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 10 }}
        exit={{ opacity: 0, y: -200 }}
        transition={{ duration: 0.5, ease: "easeOut" }}

      >
        <motion.div className="modal-dialog"
          whileTap={{ scale: 1.2 }}
        >
          <div className="modal-content rounded-3 shadow">
            <div className="modal-body p-4 text-center">
              <h5 className="mb-0">Enable this setting?</h5>
              <p className="mb-0">
                You can always change your mind in your account settings.
              </p>
            </div>
            <div className="modal-footer flex-nowrap p-0">
              <button
                type="button"
                className="btn btn-lg btn-link fs-6 text-decoration-none col-6 py-3 m-0 rounded-0 border-end"
              >
                <strong>Yes, enable</strong>
              </button>

              <motion.button
                type="button"
                className="btn btn-lg btn-link fs-6 text-decoration-none col-6 py-3 m-0 rounded-0"
                whileHover={{ scale: 1.09, backgroundColor: "#333" }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
                onClick={close} // ✅ close on click
              >
                No thanks
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </Model>
  )



  return (
    <div className="updte" onClick={close} onKeyDown={handleKeyDown}>
      <div >
        <span>mainApp</span><br />
      </div>
      <Filee setScreen={setScreen} />
      {/* {screen && MyModel} */}
      <AnimatePresence>
        {screen && MyModel}
      </AnimatePresence>
    </div>
  )
}

// const MyModel = (
//   <Model close={close} motion={motion} AnimatePresence={AnimatePresence}>
//     <AnimatePresence>
//       <motion.div
//         className="modal-dialog"
//         initial={{ opacity: 0, y: -100 }}
//         animate={{ opacity: 1, y: 0 }}
//         exit={{ opacity: 0, y: 200 }}
//         transition={{ duration: 0.5, ease: "easeInOut" }}
//       >
//         <div className="modal-content rounded-3 shadow">
//           <div className="modal-body p-4 text-center">
//             <h5 className="mb-0">Enable this setting?</h5>
//             <p className="mb-0">
//               You can always change your mind in your account settings.
//             </p>
//           </div>
//           <div className="modal-footer flex-nowrap p-0">
//             <button
//               type="button"
//               className="btn btn-lg btn-link fs-6 text-decoration-none col-6 py-3 m-0 rounded-0 border-end"
//             >
//               <strong>Yes, enable</strong>
//             </button>

//             <motion.button
//               type="button"
//               className="btn btn-lg btn-link fs-6 text-decoration-none col-6 py-3 m-0 rounded-0"
//               whileHover={{ scale: 1.09, backgroundColor: "#333" }}
//               whileTap={{ scale: 0.9 }}
//               transition={{ duration: 0.2 }}
//               onClick={close} // ✅ close on click
//             >
//               No thanks
//             </motion.button>
//           </div>
//         </div>
//       </motion.div>
//   </AnimatePresence >
//      </Model>
// )
