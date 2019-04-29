// this contains all the functions >> controller handles the logical part

const express = require('express');

let helloWorldFunction = ( req, res ) => res.send("Hello World\n");
let printExample = ( req, res ) => res.send("Print Example\n");


module.exports = {
    helloWorldFunction : helloWorldFunction,
    printExample : printExample
}