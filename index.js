// index.js serves as entry point for application

const express = require('express')
const appConfig = require('./config/appConfig')
const fs = require('fs')
const mongoose = require('mongoose')
const app = express()

let routesPath = './routes';
fs.readdirSync(routesPath).forEach(function(file){

if(~file.indexOf('.js')) {
   
    console.log("Including the following file:");
    console.log(routesPath + '/' + file);
   
    let route = require(routesPath + '/' + file);
    route.setRouter(app); 
}

}); // end bootstrap code

let modelsPath = './models';
// bootstrap models
fs.readdirSync(modelsPath).forEach(function(file){

    if(~file.indexOf('.js')) require(modelsPath + '/' + file)
    
    }); // end bootstraping models

// listening to the server - creating a local server
app.listen(appConfig.port, () => {
    console.log("The Application is running at http:/127.0.0.1:3000/");
    // creating the mongo db connection here
    let db = mongoose.connect(appConfig.db.uri,{ useMongoClient : true }); 
})

// handling mongoose connection error
mongoose.connection.on("error",function(err){
    console.log("******************************************");
    console.log('FAILED : DATABASE CONNECTION ERROR!!');
    console.log("******************************************");
    console.log(err);
}); //  end mongoose connection error

// handling mongoose success event
mongoose.connection.on("open",function(err){
    if(err){
        console.log("******************************************");
        console.log("FAILED : DATABASE CONNECTION OPEN FAILED!!");
        console.log("******************************************");
        console.log(err);
    }else{
        console.log("******************************************");
        console.log("SUCCESS : DATABASE CONNECTION OPEN SUCCESS!!");
        console.log("******************************************");
    }
}); // end mongoose connection open handler


