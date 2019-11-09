//importing mongodb module

const mClient=require('mongodb').MongoClient;

var url="mongodb+srv://ramakrishna:ramakrishna@cluster0-su2pu.mongodb.net/test?retryWrites=true&w=majority";

//creating 2 functions to obtain db connection easily in routes file

var dbo;

var dbConnection=()=>{
    mClient.connect(url,{ useUnifiedTopology: true },(err,client)=>{
        if(err){
            console.log("failed to connect to db",err)
        }
        else{
            dbo=client.db('msr');
            console.log("connected to db ....")
        }
    })
}

var connectionObj=()=>{
    //call first dbconnection method
    return dbo;
}

module.exports={dbConnection,connectionObj};