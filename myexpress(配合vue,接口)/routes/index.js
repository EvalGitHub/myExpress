var express = require('express');


var router = express.Router();

router.get('/',function(req,res,next){
  res.render('index',{
    title:'express'
  });
});

router.get('/foo',function(req,res,next){
  res.json({
    "name":"tom",
    "age":33
  })
});

router.get('/bar',function(req,res,next){
  res.send({
    "name":"bar",
    "age":33
  })
});
router.get('/goinfo',function(req,res,next){
  res.send({
    "name":"goinfo",
    "age":33
  })
});
module.exports =router;
