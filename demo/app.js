var express = require("express");
var app = new express();
app.get('/a', function (req, res) {
    res.send("hello worldaa")
});


app.post('/b', function (req, res) {
    res.send("Got a post request'");
});


app.all('/secret', function (req, res, next) {
    console.log('Accessing the secret section ...');
    next(); // pass control to the next handler
});


var server = app.listen(3001, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Examaple app listenling at http://%s:%s", host, port);
})
 
