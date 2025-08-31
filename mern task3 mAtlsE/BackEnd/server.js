import express from 'express' //? if using module as type
import cors from 'cors'
// import { conectTOdb } from "./config/mongodb.js"
import { conectTOdb } from './config/mongodb.js' //^ if i dont use default whre i export then i need { } from import and thats worked
// const { conectTOdb } = require('./config/mongodb')
import  router  from './Routes/userRoutes.js';

//~ middle wares
const App = express();
App.use(express.json())
App.use(cors())
App.use(cors({
  origin: '*',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));

console.log('middle ware done');

App.get("/", (req, res) => {
  res.send(
    `<h1>✅ SUCCESS! salam alíkúm</h1>
    <p>If you can see this, your network setup works!</p>
    <p>Server IP: ${req.connection.localAddress}</p>
    <p>Your IP: ${req.connection.remoteAddress}</p>`
    
  )
  console.log('hi jii');
})
console.log('app get done');

// const router = require('./Routes/userRoutes.js')
App.use('/mongoosAXIOS', router)

console.log('router get done');
// await conectTOdb() //? also for taht
// const port = process.env.PORT || 3000
// App.listen(port ,()=>{
//   console.log('server runing on ',port);

// })
// ~ can also but nechy wala thora diff ha 
// await conectTOdb()
// const port = process.env.PORT || 3000
// App.listen(port, () => {
//   console.log('server runing on ', port)
// })

(async () => {
  await conectTOdb()
  const port = process.env.PORT_MOBILE || 3000
  App.listen(process.env.PORT, '0.0.0.0', () => {
  console.log(`✅ Server running on port ${port}`);
  console.log(`📱 Local access: http://localhost:${port}`);
  console.log(`🌐 Network access: http://${port}:${process.env.PORT}`);
  console.log(`📋 Find your IP address using 'ipconfig' (Windows) or 'ifconfig' (Mac/Linux)`);})
})()

//~ method previous one
// conectTOdb().then(() => {
//   const port = process.env.PORT || 3000
//   App.listen(port, () => {
//     console.log('server runing on ', port)
//   })
// })