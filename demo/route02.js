/**
 * Created by Administrator on 2017/11/8.
 */
//route的链式路由

var express = require("express");
var app = new express();

app.route('/book')
    .get(function(req,res){
        res.send("Get a random book");
    })
    .post(function(req,res){
        res.send("Add a book");
    })
    .put(function(req,res){
        res.send("Update  the book")
    });

var server = app.listen(8081,function(){
    var host = server.address().host;
    var port = server.address().port;
    console.log("this is a ",port,host);
});

