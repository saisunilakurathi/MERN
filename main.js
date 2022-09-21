var utility = require("./helper_module");
var express = require("express");
var app = express();

// utility.sayHi();
// console.log(utility.adder(2, 3));

var PORT = 8080;

function start(){
    console.log("server started to work on port 8080");
}

app.get("/", function(req, resp){resp.send("<p>Hello World</p>")})


app.listen(PORT, start);