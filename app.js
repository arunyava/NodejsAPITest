var express =require('express') 
var bodyParser=require('body-parser') 
var mongoose=require('mongoose')

var {userModel}=require('./model/userModel')

var app=express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.post('/home',(req,res)=>{
  
    const userObject=new userModel(req.body)
    res.json(userObject)
    
})

app.listen(3000)