//creating mini express app

const express=require('express');

const userroute=express.Router();

//importing body parser

const bodyparser=require('body-parser');

userroute.use(bodyparser.json());

//importing mongodb module here

const connection=require('./database').dbConnection();

const connObj=require('./database').connectionObj;

//creating req handler for register request

userroute.post('/register',(req,res)=>{

    dbo=connObj();
    dbo.collection('userdetails').find({username:req.body.username}).toArray((err,data)=>{
        if(err){
            console.log("error while registering",err)
        }
        else if(data.length==0){
            dbo.collection('userdetails').insertOne(req.body,(err,regData)=>{
                if(err){
                    console.log("error while registering",err) 
                }
                else{
                    res.send({"message":"Registered successfully"})
                }
            })
        }
        else{
            res.send({"message":"Username already exists please try with another name"})
        }
    })

})

//req handler for get details request

userroute.get('/userdata',(req,res)=>{
    dbo=connObj();
    dbo.collection('userdetails').find().toArray((err,dataArray)=>{
        if(err){
            console.log("Error while finding data",err)
        }
        else{
            res.json({message:dataArray})
        }
    })
})


//req handler for login

userroute.post('/login',(req,res)=>{
    dbo=connObj();
    dbo.collection('userdetails').find({email:req.body.email,password:req.body.password}).toArray((err,loginData)=>{
        if(err){
            console.log("Error while logging in",err)
        }
        else{
            if(loginData.length==0){
                res.json({"message":"Invalid Username/Password"})
            }
            else{
                res.json({"message":"Loggin success"})
            }
        }
    })
})

//req handler for update data

userroute.put('/updateuser',(req,res)=>{
    dbo=connObj();
    
    dbo.collection('userdetails').updateOne({ username: req.body.username  }, 
        { $set: { username: req.body.username,
                musername: req.body.musername,
                lusername:req.body.lusername,
                email:req.body.email,
                   mobile:req.body.mobile,
                 } },{multi:true},(err,success)=>{
                     if(err){
                         console.log("error while updating data",err)
                     }
                     else{
                         res.json({
                             'message':"Data updated successfully",
                                  })
                     }
                 })
})

//req handler for deleting request

userroute.delete('/delete/:username',(req,res)=>{
    dbo=connObj();
    console.log(req.params)
    dbo.collection('userdetails').deleteOne({username:req.params.username},(err,success)=>{
        if(err){
            console.log("error while deleting",err)
        }
        else{
            res.json({'message':"User deleted successfully",
                      'data':success})
        }
    })
})
//export this file to server.js

module.exports=userroute;