const express =require("express")
const cors =require("cors")
const app = express();
const {route} =require('./server')

app.use(cors({
    origin:"*"
}))

app.use('/api',route)

app.listen(5000,()=>{
    console.log("server is runing")
})