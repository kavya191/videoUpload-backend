//import json server
const jsonserver=require('json-server')

//server creation
const server=jsonserver.create()

//create router
const router=jsonserver.router("db.json")

//parse or convert json to js we use a middleware
const middleware=jsonserver.defaults()

//define port
const PORT=process.env.PORT || 4000
//use middleware
server.use(middleware)
server.use(router)

//listen
server.listen(PORT,()=>{
    console.log(`JSON Server Started At Port Number ${PORT}`);
})