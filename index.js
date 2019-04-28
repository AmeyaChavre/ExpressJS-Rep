// this is needed for exporting express js into our application
const express = require('express');

// importing appConfig in index.js

const appConfig = require('./config/appConfig');

// declaring instance of an application
const app = express();
// 
let helloWorldFunction = ( req, res ) => res.send("Hello World\n");


app.get('/hello',helloWorldFunction);

// listening the server >> creating a local server

app.listen(appConfig.port, () => console.log("The Application is running at http:/127.0.0.1:3000/")); 
 


