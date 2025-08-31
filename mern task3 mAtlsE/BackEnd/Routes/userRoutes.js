import express from 'express'
const router = express.Router();

import { creatingPost } from '../controllersFrontend/Create.js'
import { allUsers } from '../controllersFrontend/Getfull.js'
import { getoneU } from '../controllersFrontend/Getfull.js';
import { deleting } from '../controllersFrontend/deleteoneORall.js'
import { updating } from '../controllersFrontend/updateONeorAll.js'

router.post("/user", creatingPost)
router.get("/user", allUsers)
router.get('/user/:id', getoneU)
router.delete("/user/:id", deleting)
router.put("/user/:id", updating)

export default router

//module.exports = router //! also be but on requiring dont use {}
// module.exports = { router }

