// import { express } from 'express' //? if using module as type
const express = require('express')
const cors = require('cors')
// import { conectTOdb } from "./config/mongodb.js"
const { conectTOdb } = require('./config/mongodb')

//~ middle wares
const App = express();
App.use(express.json())
App.use(cors())

console.log('middle ware done');

App.get("/", (req, res) => {
  res.send('salam alíkúm')
  console.log('hi jii');
})
console.log('app get done');

const { router } = require('./Routes/userRoutes')
App.use('/auxios', router)

// await conectTOdb() //? also for taht
// const port = process.env.PORT || 3000
// App.listen(port ,()=>{
//   console.log('server runing on ',port);

// })

conectTOdb().then(() => {
  const port = process.env.PORT || 3000
  App.listen(port, () => {
    console.log('server runing on ', port)
  })
})