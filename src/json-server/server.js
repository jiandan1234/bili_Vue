// https://www.jianshu.com/p/27381277747d
const jsonServer = require("json-server")
const server = jsonServer.create()
const db = require("./db")
const middlewares = jsonServer.defaults()
server.use(middlewares)

server.use(jsonServer.rewriter({
  "/user/login":"/user_login",
  "/user/logout":"user_logout"
}))

server.use(jsonServer.router(db))

server.listen(3000,()=>{
  console.log("json-server is running")
})
