//importing express module

const express=require('express');

var app=express();

//merging with angular application

const path=require('path');

app.use(express.static(path.join(__dirname,'../dist/frontend')))

//importing Routes
 const user=require('./MainRouteApi');

 app.use('/main',user)

//creating port number
port=3000;
app.listen(port,()=>{
    console.log(`server listening on port ${port}`)
})