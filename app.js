var express =require('express') 
var bodyParser=require('body-parser') 

var app=express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.post('/home',(req,res)=>{
    var getUsername=req.body.userName
    var getPassword=req.body.Password

    res.json({"userName":getUsername , "password":getPassword})
    //res.send('welcome'+ getUsername)
})

app.listen(3000)