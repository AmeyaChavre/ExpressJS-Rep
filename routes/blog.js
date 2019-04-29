// this contains routing information

const express = require('express');
const blogController = require('./../controllers/blogController');

let setRouter = (app) => {

    app.get('/hello-world',blogController.helloWorldFunction);
    app.get('/example',blogController.printExample);


}// end of setRouter function 

module.exports = {
    setRouter : setRouter
}


