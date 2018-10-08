const express = require('express')
const app = express()
const morgan = require('morgan')
const mysql = require('mysql')
var path    = require("path");
var bodyparser = require('body-parser')
const router = require('./routes/users.js')

//db confug

//app configuration
// app.use(express.static(__dirname+'./public'))
app.use(morgan('combined'))
app.listen(3000, ()=>{
	console.log('Server is now running');
})
app.use(bodyparser.urlencoded({extended: false}))
app.use(bodyparser.json())
app.use(router)


//routers

