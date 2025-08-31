import express from 'express'
import cors from 'cors'
import 'dotenv/config'

const myPort = process.env.PORT

const App = express()
App.get("/",(req,res)=>{
  res.send(`<h1>✅ SUCCESS!</h1>
    <p>If you can see this, your network setup works!</p>
    <p>Server IP: ${req.connection.localAddress}</p>
    <p>Your IP: ${req.connection.remoteAddress}</p>`)
})

App.listen((myPort), () => {
  console.log('server runing on ',myPort);

})