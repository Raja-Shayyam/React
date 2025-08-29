const express = require('express')
const router = express.Router();

const creatNewPost = require('../controllersFrontend/Create')
const getALLones = require('../controllersFrontend/Getfull')
const deleteone = require('../controllersFrontend/deleteoneORall')
const Editone = require('../controllersFrontend/updateONeorAll')

router.post("/user", creatNewPost)
router.get("/user", getALLones)
router.delete("/user/:id", deleteone)
router.put("/user/:id", Editone)



module.exports = router //! also be but on requiring dont use {}
module.exports = { router }

