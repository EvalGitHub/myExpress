/**
 * Created by Administrator on 2017/11/7.
 */
var express = require("express");
var app =express();

app.get('/',function(req,res){
    res.send("hello world");
});