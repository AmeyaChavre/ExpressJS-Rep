// index.js serves as entry point for application

const express = require('express');
const appConfig = require('./config/appConfig');
const fs = require('fs');

const app = express();

let routesPath = './routes';
fs.readdirSync(routesPath).forEach(function(file){

if(~file.indexOf('.js')) {
   
    console.log("Including the following file:");
    console.log(routesPath + '/' + file);
   
    let route = require(routesPath + '/' + file);
    route.setRouter(app); 
}

});



app.listen(appConfig.port, () => console.log("The Application is running at http:/127.0.0.1:3000/")); 
 


