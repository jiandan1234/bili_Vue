// https://www.jianshu.com/p/27381277747d
const jsonServer = require("json-server")
const server = jsonServer.create()
const router = jsonServer.router("./db.json")
const middlewares = jsonServer.defaults()

server.use(middlewares)

// 路由
server.get("/data",(req,res)=>{
  res.send("Hello World!")
})
server.get("/data1",(req,res)=>{
  setTimeout(function(){
    res.send('hello tom!')
  },1000)
})

server.get("/data2",(req,res)=>{
  setTimeout(function(){
    res.send('hello JERRY!')
  })
})




server.use(jsonServer.bodyParser)
server.use((req,res,next)=>{
  if(req.method ==="POST"){
    req.body.createAT = Date.now()
  }
  next()
})

server.use(router)
server.listen(3000,()=>{
  console.log("Json server is running")
})