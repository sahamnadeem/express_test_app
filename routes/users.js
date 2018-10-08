const express = require('express')
const router = express.Router()
const mysql = require('mysql')
var path    = require("path");
var bodyparser = require('body-parser')
const connect = require('../includes/connect.js')

router.get("/", (req, res)=>{
	console.log('We have a get request')
	res.sendFile(path.join(__dirname+'/../public/form.html'))
})

router.get("/user",(req, res)=>{
	console.log("got it")
	connect.query("SELECT * FROM user", (err, rows, fields)=>{
		if(err){
			console.log(err)
			res.sendStatus(500)
			return
		}
		console.log("fetched successfully"+rows)
		rows.forEach(element => {
			element.url = "localhost:3000/user/"+element.id
		});
		res.json(rows)
	})
})

router.get("/user/:id",(req, res)=>{
	console.log("got it")
	connect.query("SELECT * FROM user WHERE id=?",[req.params.id], (err, rows, fields)=>{
		if(rows){
			console.log("fetched successfully"+rows)
			res.json(rows)
		}else{
			console.log(err)
			res.end()
		}
	})
})

router.post("/user/create",(req, res) => {
	console.log(req.get('authorization'))
	console.log(req.body.username)
	console.log(req.body.password)
	console.log("create User")
	res.end()
})

module.exports = router