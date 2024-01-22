const route = require("express").Router();
const {data}=require('./Store')

route.get('/blog',data)

module.exports={route}